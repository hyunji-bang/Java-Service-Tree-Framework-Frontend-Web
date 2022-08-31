<template>
  <li>
    <span class="time-label-title label-title-requirement">{{ listData.title }}</span>
  </li>
  <li v-for="(listInfo, idx) in listData.content" :key="idx">
    <div class="list-left">
      <span class="time-label-icon" :style="listInfo.pointColor"
        ><i class="icon" :class="listInfo.iconPath"></i
      ></span>
    </div>
    <div class="list-right">
      <h3 class="timeline-header clearfix">
        <a :href="listInfo.link" target="_blank">{{ listInfo.title }}</a>
        <small>{{ listInfo.subTitle }}</small>
        <span class="time"> <i class="far fa-clock"></i> {{ listInfo.time }} </span>
      </h3>
      <div class="timeline-body">
        <div class="body-left">
          <a
            v-for="(leftConent, idx2) in listInfo.bodyLeftText"
            :key="idx2"
            :href="leftConent.link"
            :style="listInfo.pointColor"
            >{{ leftConent.text }}</a
          >
        </div>
        <div class="body-right">
          Input : {{ listInfo.bodyRightText[0] }} <br />
          Skill : {{ listInfo.bodyRightText[1] }} <br />
          Output : {{ listInfo.bodyRightText[2] }} <br />
          System : {{ listInfo.bodyRightText[3] }} <br />
        </div>
      </div>
    </div>
  </li>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  listData: Array,
});
</script>
