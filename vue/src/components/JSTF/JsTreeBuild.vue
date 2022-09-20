<template>
  <input type="text" id="search-input" placeholder="찾을 노드 이름 입력" />
  <div id="demo"></div>
</template>
<script>
import $ from 'jquery';
import 'jquery/src/jquery.js';
import 'jstree/dist/jstree.min.js';
import 'jstree/dist/themes/default/style.min.css';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      treeData: [],
      selected: null,
    };
  },
  props: {
    DataUrlList: Object,
    isMonitor: Boolean,
    columns: Array,
    dataSrc: String,
  },
  computed: {
    ...mapState(['isDevelopingToRoute']),
  },

  methods: {
    //treeData 가공
    makeTreeData(data) {
      let arrangeData;
      let matchData;
      let getParentIdList = [];
      if (this.isMonitor === true) {
        arrangeData = [...data].map((tree, idx) => {
          matchData = data[idx];
          return {
            id: matchData['c_id'],
            parentId: matchData['c_parentid'],
            position: matchData['c_position'],
            text: matchData['c_title'],
            children: matchData['childcount'] === 'InChild' ? [] : false,
            type: matchData['c_type'],
          };
        });
      } else if (this.isMonitor === false) {
        [...data.rows].forEach((tree, idx) => {
          return getParentIdList.push(data.rows[idx].cell[1]);
        });
        arrangeData = [...data.rows].map((tree, idx) => {
          matchData = data.rows[idx].cell;
          return {
            id: matchData[0],
            parentId: matchData[1],
            position: matchData[2],
            text: matchData[6],
            children: getParentIdList.includes(matchData[0]) ? [] : false,
            type: matchData[7],
          };
        });
      }
      arrangeData.splice(0, 1);
      this.treeData = [...arrangeData].map(data => {
        if (typeof data.children === 'object') {
          const parentId = data.id;
          arrangeData.forEach(data2 => {
            if (data2.parentId === parentId) {
              return (data.children[data2.position] = data2);
            }
          });
        }
        return data;
      });
      return this.treeData;
    },
    //Jstree search
    jsTreeSearch() {
      let to = false;
      $('#search-input').keyup(function () {
        if (to) {
          clearTimeout(to);
        }
        to = setTimeout(function () {
          const v = $('#search-input').val();
          const tableInput = $('#jstreeTable_filter label input');
          $('#demo').jstree(true).search(v);
          tableInput.val(v).keyup();
        }, 250);
      });
    },
    //build jstree
    jsTreeBuild(treeDataArray, isDevelopingToRoute, dataUrl, dataTableLoad) {
      $('#demo')
        .jstree({
          plugins: ['dnd', 'search', 'types', 'contextmenu', 'checkbox'],
          checkbox: {
            keep_selected_style: false,
            whole_node: false,
            tie_selection: false,
          },
          core: {
            check_callback: true,
            data: treeDataArray,
          },
          types: {
            drive: {
              icon: require('@/assets/images/devops/JSTF/home.png'),
              valid_children: ['folder', 'default', 'file'],
              start_drag: false,
              move_node: false,
              delete_node: false,
              remove: false,
            },
            folder: {
              icon: require('@/assets/images/devops/JSTF/ic_explorer.png'),
              valid_children: ['folder', 'default'],
            },
            default: {
              icon: require('@/assets/images/devops/JSTF/attibutes.png'),
              valid_children: [],
            },
          },
          contextmenu: {
            select_node: true,
            items: function (node) {
              var tmp = $.jstree.defaults.contextmenu.items();
              delete tmp.create.action;
              //create
              tmp.create.label = 'Create';
              tmp.create.separator_after = false;
              tmp.create.submenu = {
                create_folder: {
                  separator_before: false,
                  separator_after: false,
                  label: 'Folder',
                  action: function (data) {
                    var inst = $.jstree.reference(data.reference),
                      obj = inst.get_node(data.reference);
                    inst.create_node(
                      obj,
                      { type: 'folder' },
                      'last',
                      function (new_node) {
                        setTimeout(function () {
                          inst.edit(new_node);
                        }, 0);
                      },
                    );
                  },
                },
                create_file: {
                  label: 'File',
                  action: function (data) {
                    var inst = $.jstree.reference(data.reference),
                      obj = inst.get_node(data.reference);
                    inst.create_node(
                      obj,
                      { type: 'default' },
                      'last',
                      function (new_node) {
                        setTimeout(function () {
                          inst.edit(new_node);
                        }, 0);
                      },
                    );
                  },
                },
              };

              //edit
              tmp.ccp.separator_before = false;
              delete tmp.ccp.action;
              tmp.ccp.submenu = {
                cut: {
                  seperator_before: false,
                  seperator_after: false,
                  label: 'Cut',
                  action: function (data) {
                    var inst = $.jstree.reference(data.reference);
                    var obj = inst.get_node(data.reference);
                    inst.cut(obj);
                  },
                },
                paste: {
                  seperator_before: false,
                  seperator_after: false,
                  label: 'Paste',
                  action: function (data) {
                    var inst = $.jstree.reference(data.reference);
                    var obj = inst.get_node(data.reference);
                    inst.paste(obj, 'last', 'copy_mode');
                    inst.open_node(obj);
                  },
                },

                changeType: {
                  seperator_before: false,
                  seperator_after: false,
                  label: 'Change Type',
                  submenu: {
                    toFile: {
                      seperator_before: false,
                      seperator_after: false,
                      label: 'toFile',
                      action: function (data) {
                        var inst = $.jstree.reference(data.reference);
                        var obj = inst.get_node(data.reference);
                        inst.set_type(obj, 'default');
                        dataUrl.alterNodeType
                          .list({
                            c_id: obj.id,
                            c_type: obj.type,
                          })
                          .then(() => {
                            dataTableLoad();
                          });
                      },
                    },
                    toFolder: {
                      seperator_before: false,
                      seperator_after: false,
                      label: 'toFolder',
                      action: function (data) {
                        var inst = $.jstree.reference(data.reference);
                        var obj = inst.get_node(data.reference);
                        inst.set_type(obj, 'folder');
                        dataUrl.alterNodeType
                          .list({
                            c_id: obj.id,
                            c_type: obj.type,
                          })
                          .then(() => {
                            dataTableLoad();
                          });
                      },
                    },
                  },
                },
              };
              if (this.get_type(node) === 'default') {
                delete tmp.create;
              }
              return tmp;
            },
          },
        })
        .on('loaded.jstree', function () {
          $('#demo').jstree('open_node', [2, 4]);
        })
        .on('select_node.jstree', function (data) {
          return (this.selected = data.selected);
        });

      this.jsTreeCreateNode(dataUrl);
      this.jsTreeDeleteNode(dataUrl, dataTableLoad);
      this.jsTreeRenameNode(dataUrl, dataTableLoad);
      this.jsTreeMoveNode(dataUrl, dataTableLoad);
    },

    //jstree create_node
    jsTreeCreateNode(dataUrl) {
      $('#demo').on('create_node.jstree', function (e, data) {
        dataUrl.addNode
          .list({
            ref: data.node.parent,
            c_position: data.position,
            c_title: data.node.text,
            c_type: data.node.type,
          })
          .then(d => {
            $('#demo').jstree(true).set_id(data.node, d.id);
          });
      });
    },

    //jstree delete_node
    jsTreeDeleteNode(dataUrl, dataTableLoad) {
      $('#demo').on('delete_node.jstree', function (e, data) {
        dataUrl.removeNode
          .list({
            c_id: data.node.id,
          })
          .then(() => {
            setTimeout(() => dataTableLoad(), 100);
          });
      });
    },

    //jstree rename_node
    jsTreeRenameNode(dataUrl, dataTableLoad) {
      $('#demo').on('rename_node.jstree', function (e, data) {
        dataUrl.alterNode
          .list({
            c_id: data.node.id,
            c_title: data.text,
            c_type: data.node.type,
          })
          .then(() => {
            dataTableLoad();
          });
      });
    },

    //jstree move_node
    jsTreeMoveNode(dataUrl, dataTableLoad) {
      $('#demo').on('move_node.jstree', function (e, data) {
        dataUrl.moveNode
          .list({
            c_id: data.node.id,
            ref: data.node.parent,
            c_position: data.position,
          })
          .then(() => {
            dataTableLoad();
          });
      });
    },
  },

  mounted() {
    const dataUrl = this.DataUrlList;

    if (window.location.port == 9999) {
      console.log('csrf 우회 because local development');
    } else {
      $.ajax({
        async: false,
        type: 'GET',
        url: this.isDevelopingToRoute + '/api/jsTreeServiceFramework/security/csrf.do',
        success: function (r) {
          const token = r._csrf_token;
          const header = r._csrf_headerName;
          $(document).ajaxSend(function (e, xhr) {
            xhr.setRequestHeader(header, token);
          });
        },
      });
    }

    dataUrl.getData.list().then(response => {
      const dataTableReload = () => this.$store.commit('nodeUpdate');

      this.makeTreeData(response);
      this.jsTreeSearch();
      this.jsTreeBuild(
        this.treeData[0],
        this.isDevelopingToRoute,
        dataUrl,
        dataTableReload,
      );
    });
  },
};
</script>

<style lang="scss">
/* js tree 검색창 */
#search-input {
  background: url('@/assets/images/devops/JSTF/search-white.png') 5px 5px no-repeat
    rgba(51, 51, 51, 0.4);
  border: 1px solid rgba(51, 51, 51, 0.425);
  color: #f8f8f8;
  padding: 5px 12px 5px 26px;
  width: 100%;
  font-size: 13px;
  &::placeholder {
    width: 100%;
  }
}
#demo {
  background: rgba(51, 51, 51, 0.4);
  border: 1px solid rgba(51, 51, 51, 0.425);
  margin-top: 5px;
  /* 폴더 이미지 */
  > .jstree-children {
    > .jstree-node {
      > .jstree-children {
        .jstree-node {
          &.jstree-open {
            > .jstree-anchor {
              > .jstree-themeicon {
                background-image: url('@/assets/images/devops/JSTF//toolbar_open.png') !important;
              }
            }
          }
        }
      }
      .jstree-anchor {
        font-size: 13px;
        &.jstree-search {
          color: #fff;
          font-style: normal;
          background-color: #e5603b;
        }
        &.jstree-clicked {
          background-color: #e5603b;
          box-shadow: none;
          border-radius: 0;
          &.jstree-hovered {
            background-color: #e5603b;
          }
        }
        &.jstree-hovered,
        &.jstree-context {
          background: rgba(117, 117, 117, 0.325);
          box-shadow: none;
        }
      }
    }
  }
}
/* context menu style */
.jstree-contextmenu {
  &.vakata-context {
    box-shadow: none;
    min-width: 180px;
    margin-left: 9px;
    background: rgba(51, 51, 51);
    border: none;
    li {
      width: 100%;
      height: 100%;
      display: block;
      position: relative;
      padding: 0;
      > &.vakata-context-hover {
        > a {
          color: #000;
        }
      }
      a {
        padding: 3px 6px;
        font-size: 12px;
        border: none;
        color: #fff;
        text-shadow: none;
        line-height: 1;
        &:hover {
          color: #000;
        }

        i {
          display: none;
        }
        .vakata-contextmenu-sep {
          background: none;
          border: none;
          height: 0;
          float: right;
        }
        &.vakata-context-parent {
          background-image: none;
          position: relative;

          .vakata-contextmenu-sep {
            &::after {
              content: '\00BB';
              display: block;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }

      ul {
        top: 0px;
        margin: 0;
        box-shadow: none;
        min-width: 180px;
        padding: 0;
        border: none;
        display: none;
        background: rgba(51, 51, 51);
      }
    }
  }
}
</style>
