<!--
 * @Author: 刘梦昊 1551316289@qq.com
 * @Date: 2024-10-23 16:36:12
 * @LastEditTime: 2024-11-21 17:00:38
 * @LastEditors: 刘梦昊
 * @FilePath: \vueproject01\src\views\demo1\filterTable.vue
 * @Description: 过滤排序表格
-->
<template>
  <div class="containerWrap">
    <div class="arrowDemo"></div>
    <div class="descArrowDemo"></div>
    <div>Search<input name="query" v-model="searchQuery" /></div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th v-for="(col, index) in tableColumns" :key="index" @click="handleSort(col)">
              {{ col }}
              <span class="arrow" :class="sortObj[col] > 0 ? 'asc' : 'desc'"></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td v-for="(col, index) in tableColumns" :key="index">{{ item[col] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      pageName: 'filterTable',
      searchQuery: "",
      tableColumns: ["name", "power"],
      tableData: [
        { name: "Chuck Norris", power: 'Infinity' },
        { name: "Bruce Lee", power: 9000 },
        { name: "Jackie Chan", power: 7000 },
        { name: "Jet Li", power: 8000 },
      ],
      tableDataCopy: [],
      sortObj: {
        name: 1,
        power: 1
      }
    }
  },
  watch: {
    searchQuery (val) {
      const str = String(val).toLowerCase()
      if (val) {
        this.tableData = this.tableDataCopy.filter(r => r.name.toLowerCase().indexOf(str) > -1 || String(r.power).indexOf(str) > -1)
      } else {
        this.tableData = this.tableDataCopy
      }
    }
  },
  mounted () {
    this.tableDataCopy = JSON.parse(JSON.stringify(this.tableData))
    // this.arrayMethodDemo()
  },
  methods: {
    handleSort (key) {
      this.sortObj[key] = - this.sortObj[key]
      if (key === 'name') {
        this.tableData.sort((a, b) => this.sortObj[key] > 0 ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
      }
      if (key === 'power') {
        this.tableData.sort((a, b) => this.sortObj[key] > 0 ? (a[key] - b[key]) : (b[key] - a[key]))
      }
    },
    // Array方式应用
    arrayMethodDemo () {
      // Array.reduce()方法： reduce(func(total, item), initValue)
      const sortOrders = this.tableColumns.reduce((o, key) => ((o[key] = 1), o), {a: 100})
      // console.log(sortOrders, 'sortOrders')
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const res = arr.reduce((total, item ) => total + item, 0)
      const res1 = arr.reduce((total, item ) => {
        console.log(this.pageName)
        return total + item
      }, 0)
      const res2 = arr.reduce(function (total, item) {
        console.log(this.pageName)
        return total + item
      }, 0)
      console.log(res, 'res..')
      console.log(res2, 'res2..')
      // Array.sort()方法
      const arr1 = [1, 100, 21, 30, 4]
      // console.log(arr1.sort())
      // console.log(arr1.sort((a, b) => a - b))
    },
    testThisDemo () {
      
    }
  }
};
</script>

<style lang="scss" scoped>
.arrowDemo {
  border-left: 100px solid #7aecb9;
  border-right: 100px solid #7aecb9;
  border-top: 100px solid #8f8ff0;
}
.descArrowDemo {
  // border边框的夹角是45度
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-top: 100px solid rgb(222, 222, 245);
}
.table {
  table {
    border: 2px solid #42b983;
    border-radius: 3px;
    .arrow {
      display: inline-block;
      vertical-align: middle;
      margin-left: 5px;
      opacity: 0.66;
    }
    .asc {
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid #fff;
    }
    .desc {
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #fff;
    }
  }
  th, td {
    border: 1px solid #fff;
    width: 120px;
    padding: 10px 20px;
  }
  th {
    background-color: #42b983;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    user-select: none
  }
  td {
    background: #f9f9f9;
  }
}
</style>
