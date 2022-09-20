<template>
  <table
    id="jstreeTable"
    class="dataTable no-footer dtr-inline collapsed display responsive nowrap"
    cellspacing="0"
  >
    <thead>
      <tr>
        <th>c_id</th>
        <th>c_parentid</th>
        <th>c_position</th>
        <th>c_left</th>
        <th>c_right</th>
        <th>c_level</th>
        <th>c_title</th>
        <th>c_type</th>
      </tr>
    </thead>
  </table>
</template>
<script>
import { mapState } from 'vuex';
export default {
  props: {
    tableDataUrl: String,
    columns: Array,
    dataSrc: String,
  },
  computed: {
    nodeUpdate() {
      return this.$store.state.nodeUpdate;
    },
  },
  watch: {
    nodeUpdate: {
      handler: function (a) {
        if (a) {
          this.dataTableReload();
        }
      },
      deep: true,
    },
  },
  methods: {
    dataTableReload() {
      this.$store.commit('dataTabelLoad', {
        dataUrl: this.tableDataUrl,
        dataSrc: this.dataSrc,
        dataColumns: this.columns,
      });
    },
  },
  mounted() {
    this.dataTableReload();
  },
};
</script>
<style lang="scss">
@import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
@import 'datatables.net-dt/css/jquery.dataTables.min.css';
@import 'datatables.net-select-dt/css/select.dataTables.min.css';
.dataTables_wrapper {
  font-size: 13px;
  clear: both;
  border-collapse: separate;
  border-spacing: 0;
  .dataTables_length {
    color: #fff !important;
    label {
      select {
        color: #fff !important;
      }
    }
  }
  /* table filter */
  .dataTables_filter {
    color: #fff !important;
    label {
      input {
        color: #fff !important;
        border: none !important;
        padding-left: 26px;
        background: url('@/assets/images/devops/JSTF/search-white.png') 5px 5px no-repeat
          rgba(51, 51, 51, 0.4);
        width: 200px;
        margin-left: 0.5rem;
        line-height: 18px;
        min-height: 30px;
      }
    }
  }
  .dataTables_info {
    color: #fff !important;
  }
  /* pagination */
  .dataTables_paginate {
    .paginate_button {
      cursor: default;
      color: #f8f8f8 !important;
      border: 1px solid transparent;
      box-shadow: none;
      background-color: #e5603b;
      border: none;
      &.disabled {
        background-color: #e5603b;
        color: #fff !important;
      }
      &.current {
        background-color: #e5603b;
        color: #fff !important;
      }
      &.disabled:hover,
      &.disabled:active,
      &:hover,
      &.current:hover {
        color: #fff !important;
        background: #e5603b71;
        border: none;
        transform: none;
      }
    }
  }
  tbody {
    tr.odd {
      background: rgba(51, 51, 51, 0.325);
    }
  }
  th,
  td {
    vertical-align: middle;
  }
  th::before,
  th::after {
    font-size: 18px !important;
  }
}
</style>
