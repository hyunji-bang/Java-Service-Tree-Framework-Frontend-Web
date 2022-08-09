<template>
  <div class="conainer">
    <ContentHeader
      subTitle="jsTree Service Framework<sup>TSF</sup> Spring-Hibernate Demo"
    />
    <div class="content-section">
      <div class="tree-section">
        <Tree
          id="js-tree"
          ref="js-tree-ref"
          :custom-options="myCustomOptions"
          :custom-styles="myCustomStyles"
          :nodes="treeDisplayData"
        ></Tree>
      </div>
    </div>
  </div>
  <ContextMenu
    v-if="contextMenuIsActive"
    ref="contextMenu"
    :top="contextMenuPosition.top"
    :left="contextMenuPosition.left"
  />
</template>
<script>
import Tree from 'vuejs-tree';
import ContentHeader from '@/components/DevOps/common/ContentHeader.vue';
import ContextMenu from '@/components/DevOps/common/ContextMenu.vue';

export default {
  name: 'treeView',
  components: { Tree, ContentHeader, ContextMenu },
  props: {
    treeData: { type: Array, required: true },
    toggleTree: { type: Function, required: true },
  },
  data() {
    return {
      contextMenuIsActive: false,
      contextMenuPosition: { top: 0, left: 0 },
      treeDisplayData: [
        {
          text: 'Root 1',
          id: 0,
          state: {
            checked: false,
            selected: false,
            expanded: false,
            nodes: true,
          },
          nodes: [
            {
              text: 'Child 1',
              state: { checked: false, selected: false, expanded: false },
              id: 1,
              nodes: [
                {
                  text: 'Grandchild 1',
                  id: 3,
                  state: { checked: false, selected: false, expanded: false },
                },
                {
                  text: 'Grandchild 2',
                  state: { checked: false, selected: false, expanded: false },
                },
              ],
            },
            {
              text: 'Child 2',
              state: { checked: false, selected: false, expanded: false },
            },
          ],
        },
        {
          text: 'Root 2',
          state: { checked: false, selected: false, expanded: false },
        },
      ],
      clickedNode: '',
    };
  },
  methods: {
    selectNode: function (nodeId, state) {
      console.log(`is ${nodeId} selected ? ${state}`);
      this.toggleTree(nodeId);
    },
  },
  mounted() {
    const jstree = this.$refs['js-tree-ref'];
    const jstreeNodeList = document.querySelectorAll('#js-tree ul li');
    const contextList = document.querySelectorAll('.context-list');

    window.addEventListener('click', () => {
      this.contextMenuIsActive = false;
    });
    contextList.forEach(list => {
      list.addEventListener('click', () => {
        this.contextMenuIsActive = false;
      });
    });

    jstreeNodeList.forEach(list => {
      list.addEventListener('contextmenu', e => {
        e.preventDefault();
        this.clickedNode = e.currentTarget;
        if (e.target.tagName === 'SPAN' && e.target.dataset.toggle === 'tooltip') {
          let targetRect = e.target.getBoundingClientRect();
          this.contextMenuIsActive = true;
          this.contextMenuPosition.top = window.pageYOffset + targetRect.bottom;
          this.contextMenuPosition.left = targetRect.x;
        }
      });
    });
  },
  computed: {
    myCustomStyles() {
      return {
        tree: {
          style: {
            padding: '10px',
            height: 'auto',
            maxHeight: '300px',
            overflowY: 'visible',
            display: 'inline-block',
            textAlign: 'left',
            color: '#000',
          },
        },
        row: {
          style: {
            width: 'auto',
            cursor: 'pointer',
          },
          child: {
            class: '',
            style: {
              height: '20px',
            },
            active: {
              class: 'custom_row_active_class',
              style: {
                height: '20px',
              },
            },
          },
        },
        addNode: {
          class: 'bi bi-plus',
          style: {
            color: '#007AD5',
          },
        },
        editNode: {
          class: 'bi bi-pencil-square',
          style: {
            color: '#007AD5',
          },
        },
        deleteNode: {
          class: 'bi bi-x-circle',
          style: {
            color: '#EE5F5B',
          },
        },
        selectIcon: {
          class: 'bi bi-check2-circle',
          style: {
            color: '#007AD5',
          },
          active: {
            class: 'bi bi-radioactive',
            style: {
              color: '#2ECC71',
            },
          },
        },
        text: {
          style: {},
          class: 'capitalize',
          active: {
            style: {
              'font-weight': 'bold',
              color: '#2ECC71',
            },
          },
        },
      };
    },
    myCustomOptions() {
      return {
        treeEvents: {
          expanded: {
            state: true,
            fn: null,
          },
          collapsed: {
            state: true,
            fn: null,
          },
          selected: {
            state: true,
            fn: this.selectNode,
          },
          checked: {
            state: true,
            fn: this.myCheckedFunction,
          },
        },
        events: {
          expanded: {
            state: true,
            fn: null,
          },
          selected: {
            state: false,
            fn: null,
          },
          checked: {
            state: true,
            fn: null,
          },
          editableName: {
            state: true,
            fn: null,
            calledEvent: 'selected',
          },
        },
        addNode: {
          state: true,
          fn: node => {
            this.$refs['js-tree-ref'].expandNode(node.id);
            const newNode = {
              text: 'Grandchild 2',
              id: Math.floor(Math.random() * 100),
              state: { checked: false, selected: false, expanded: false },
            };
            console.log('example: add node', newNode);
            if (node.nodes === undefined) {
              node.nodes = [newNode];
            } else {
              node.nodes.push(newNode);
            }
          },
          appearOnHover: true,
        },
        editNode: {
          state: true,
          fn: node => {
            const getAllList = document.querySelectorAll('li');
            getAllList.forEach(ele => {
              console.log(ele.dataset.id);
              if (ele.dataset.id == node.id) {
                const form = document.createElement('form');
                const input = document.createElement('input');
                input.setAttribute('type', 'text');
                form.append(input);
                ele.append(form);
                form.addEventListener('submit', e => {
                  e.preventDefault();
                  console.log(input.value);
                  node.text = input.value;
                  form.remove();
                });
              }
            });
            console.log(this.$refs['js-tree-ref'].findNode(node.id));
          },
          appearOnHover: true,
        },
        deleteNode: {
          state: true,
          fn: node => {
            const nodePath = this.$refs['js-tree-ref'].findNodePath(node.id);
            const parentNodeId = nodePath.slice(-2, -1)[0];
            console.log(this.$refs['js-tree-ref'].findNodePath());
            if (parentNodeId === undefined) {
              // 'root' node
              const nodeIndex =
                this.$refs['js-tree-ref'].nodes.findIndex(x => x.id !== node.id) - 1;
              this.$refs['js-tree-ref'].nodes.splice(nodeIndex, 1);
            } else {
              // child node
              const parentNode = this.$refs['js-tree-ref'].findNode(parentNodeId);
              const nodeIndex = parentNode.nodes.findIndex(x => x.id !== node.id) - 1;
              parentNode.nodes.splice(nodeIndex, 1);
            }
            console.log('example: remove node', node.id);
          },
          appearOnHover: true,
        },
        showTags: true,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.content-section {
  position: relative;
  /*background: none;*/
  div {
    padding: 15px;
    &.tree-section {
      background: rgba(51, 51, 51, 0.425);
      flex-basis: 33%;
    }
    &.table-section {
      margin-left: 30px;
    }
  }
}
</style>
<style lang="scss">
#js-tree {
  li {
    /*height: 20px;*/
  }
  .row_data {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #fff;

    span {
      &:first-child {
        width: 18px;
      }
      .expanded_icon {
        vertical-align: middle;
        margin-right: 10px;
        border-color: transparent transparent transparent rgb(209, 208, 208);
      }
    }
    input[type='checkbox'] {
      margin-right: 5px;
    }
  }
}
</style>
