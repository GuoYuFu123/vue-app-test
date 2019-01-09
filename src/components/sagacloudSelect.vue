<template>

    <div class="sgy-select" tabindex="0" @blur="show=false">

      <div class="fill" @click="show = !show">

        <div class="tags">
          <div>
            <label>{{label}} :</label>
            <span  v-if="value===''">全部</span>
            <ul class="items" v-else>
              <template>
                {{getTextByValue(value)}}
              </template>
            </ul>

          </div>
        </div>
        <Icon type="ios-arrow-down" :class="{rotate: show}"/>
      </div>

      <div class="list" v-if="show">
        <ul>
          <li class="clear" @click="clearSelect">清空选项</li>
          <li v-for="(item, index) in list" :class="{actived: active(item.value)}" :key="index" @click="onClick(item.value)">
             {{item.text}}<Icon type="ios-checkmark" size='30' v-show="active(item.value)"/>
          </li>
        </ul>
      </div>

    </div>

</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  components: {},
  props: {
    value: {},
    list: {
      type: Array,
      default: () => []
    },
    label: ""
  },
  data () {
    return {
      show: false
    }
  },

  computed: {},

  mounted () {},

  methods: {
    active (val) {
      return this.value == val
    },
    onClick (val) {
      this.$emit('input', val)
    },
    clearSelect () {
      this.$emit('input', '')
    },
    getTextByValue (value) {
      const item = this.list.find(i => i.value == value)
      return item ? item.text : ''
    }
  }
}
</script>

<style scoped lang="less" style="text/less">
.rotate {
  transform: rotate(180deg);
}
.sgy-select {
  outline: none;
  width:280px;
  position: relative;
  z-index: 3;
  .fill {
    vertical-align: middle;
    width: 100%;
    height:34px;
    border-radius: 4px;
    box-shadow: none;
    border: 1px solid #ccc;
    padding: 0 2px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover,
    &:active,
    &:focus {
      outline: none;
      border-color: #2d8cf0;
    }
    i.rotate,.ivu-icon-ios-arrow-down {
      margin-right: 10px;
      transition: transform 0.3s ease-in-out;
    }

    .tags {
      > div {
         display: flex;
         margin-top: 9px;
        label{
              font-size: 14px;
              color: #212830;
              padding-left: 3px;
        }
        span {
            display: inline-block;
            font-size: 14px;
            padding-right: 5px;
            padding-left: 5px;
            border-radius: 2px;
            color: #212830;
        }
        ul {
           display: inline-block;
           font-size: 14px;
           color: #212830;
           width: 140px;
           white-space: nowrap;
           overflow: hidden;
           text-overflow: ellipsis;
           padding-left: 5px;
           margin-bottom:-3px;
          li {
             display: inline-block;
             padding-right: 5px;
          }
        }
      }
    }
  }
  .list {
        //margin-top: 5px;
        z-index: 4;
        ul {
            border: 1px solid #E0E0E0;
            box-shadow: 0 1px 6px 0 rgba(0,0,0,0.12);
            border-radius: 4px;
            background-color: #fff;
            width: 95%;
            position: absolute;
            max-height: 400px;
            overflow: auto;
            .clear {
              color: #728DEE;
            }
        li {
              padding: 5px;
              padding-left: 9px;
              cursor: pointer;
              &:hover {
              background-color: #f5f7fa;
            }
            &.actived {
                color:#2d8cf0;
            }
            i{
                float: right;
                margin-right: 8px;
            }
        }
    }
  }
}
</style>
