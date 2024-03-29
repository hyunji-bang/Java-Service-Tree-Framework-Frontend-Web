<template>
  <div class="conainer">
    <ContentHeader subTitle="Welcome" />
    <div class="content-section">
      <ul class="almSupport">
        <AlmSupportListConent
          v-for="(list, idx) in AlmSupportList"
          :key="idx"
          :listData="list"
        />
        <li>
          <div class="list-left">
            <span class="time-label-icon"><i class="far fa-clock"></i></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import ContentHeader from '@/components/common/ContentHeader.vue';
import AlmSupportListConent from '@/components/DevSupport/AlmSupportListConent.vue';
const RequirementListData = {
  title: 'Requirements',
  content: [
    {
      iconPath: 'fas fa-balance-scale',
      title: '착수',
      subTitle: 'Customers & Sales',
      time: '09:00 (MON)',
      pointColor: 'background-color: #d81b60',
      link: 'http://www.313.co.kr/confluence/',
      bodyLeftText: [
        { text: 'Confluence by 313 DEV GRP', link: 'http://www.313.co.kr/confluence/' },
      ],
      bodyRightText: [
        'Plan & Opnion & Idea',
        'Negotiation',
        'Requirements',
        'Atlassian Confluence (Online Document System)',
      ],
    },
    {
      iconPath: 'bi bi-check-square',
      title: '기획',
      subTitle: 'Project Manager',
      time: '10:00 (TUE)',
      pointColor: 'background-color: #f39c12',
      link: 'http://www.313.co.kr/confluence/',
      bodyLeftText: [
        { text: 'Confluence by 313 DEV GRP', link: 'http://www.313.co.kr/confluence/' },
      ],
      bodyRightText: [
        'Requirements',
        'Requirements engineering',
        'SRS ( Software Requirements Specification )',
        'System : Atlassian Confluence ( Online Document System )',
      ],
    },
    {
      iconPath: 'fa-solid fa-cubes',
      title: '실행 및 이행',
      subTitle: 'Developers',
      time: '12:00 (WED)',
      pointColor: 'background-color: #39cccc',
      link: 'http://www.313.co.kr/jira/secure/Dashboard.jspa',
      bodyLeftText: [
        {
          text: 'Jira by 313 DEV GRP',
          link: 'http://www.313.co.kr/jira/secure/Dashboard.jspa',
        },
      ],
      bodyRightText: [
        'SRS ( Software Requirements Specification )',
        'Architecture design',
        'SDS ( Software Design Specification )',
        'Atlassian Jira ( Issue Management System )',
      ],
    },
  ],
};
const DevelopmentListData = {
  title: 'Development',
  content: [
    {
      iconPath: 'fa-solid fa-sitemap',
      title: '실행 및 이행',
      subTitle: 'Developers',
      time: '15:00 (THU)',
      pointColor: 'background-color: #3c8dbc',
      link: 'https://github.com/jstree',
      bodyLeftText: [
        { text: 'GitHub by 313 DEV GRP', link: 'https://github.com/jstree' },
        { text: 'Fecru by 313 DEV GRP', link: 'http://www.313.co.kr/fecru' },
        { text: 'Bamboo by 313 DEV GRP', link: 'http://www.313.co.kr/bamboo' },
      ],
      bodyRightText: [
        'SDS ( Software Design Specification )',
        'Quality Assurance',
        'TCR ( Test Case Result )',
        'SonarQube',
      ],
    },
    {
      iconPath: 'fa-solid fa-bug',
      title: '감시 및 통제',
      subTitle: 'Quality Assurance',
      time: '17:00 (FRI)',
      pointColor: 'background-color: #605ca8',
      link: 'https://github.com/jstree',
      bodyLeftText: [
        {
          text: 'Project Analysis by 313 DEV GRP',
          link: 'http://www.313.co.kr/analysis/',
        },
        { text: 'Nexus by 313 DEV GRP', link: 'http://www.313.co.kr/nexus' },
        { text: 'Sonar by 313 DEV GRP', link: 'http://www.313.co.kr/sonar' },
      ],
      bodyRightText: [
        'Source Code & Artifacts',
        'Quality Assurance',
        'TCR ( Test Case Result )',
        'SonarQube',
      ],
    },
  ],
};
const OperationListData = {
  title: 'Operation',
  content: [
    {
      iconPath: 'fa-solid fa-train',
      title: '종료',
      subTitle: 'Project Member',
      time: '18:00 (SAT)',
      pointColor: 'background-color: #111111',
      link: 'https://github.com/jstree',
      bodyLeftText: [
        {
          text: 'DockerHub by 313 DEV GRP',
          link: 'https://hub.docker.com/u/313devgrp/',
        },
      ],

      bodyRightText: [
        'TCR ( Test Case Result )',
        'Lessons learned and retrospective',
        'Container',
        'Docker ( Cloud Operating system )',
      ],
    },
  ],
};
const AlmSupportList = [RequirementListData, DevelopmentListData, OperationListData];
</script>

<style lang="scss">
.almSupport {
  position: relative;
  /* timeline 선 */
  &:after {
    content: '';
    z-index: -1;
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 14px;
    background-color: rgba(255, 255, 255, 0.479);
  }
  /* support list */
  li {
    display: flex;
    font-size: 14px;
    margin-bottom: 15px;
    /* timeline style */
    &:nth-last-child(1) {
      .time-label-icon {
        background-color: #a6a7a8;
      }
    }
    .time-label-title {
      padding: 5px;
      border-radius: 5px;
      &.label-title-requirement {
        background-color: #dd4c39;
      }
      &.label-title-Developement {
        background-color: #00c0ef;
      }
      &.label-title-operation {
        background-color: #001f3f;
      }
    }
    .time-label-icon {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      place-content: center;
      align-items: center;
    }
    /* list body content */
    .list-left {
      padding-top: 12px;
    }
    .list-right {
      margin-left: 20px;
      flex-basis: calc(100% - 30px);
      h3 {
        width: 100%;
        margin: 0;
        background-color: rgba(51, 51, 51, 0.5);
        padding: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        color: #3c8dbc;
        font-weight: 500;
        small {
          margin-left: 5px;
          color: #fff;
          font-weight: 300;
        }
        span {
          float: right;
          font-size: 13px;
          color: #fff;
          font-weight: 300;
          align-self: center;
        }
      }
      .timeline-body {
        display: flex;
        font-size: 12px;
        .body-left {
          flex-basis: 192px;
          a {
            display: inline-block;
            padding: 3px;
            border-radius: 5px;
            white-space: nowrap;
          }
        }
        .body-right {
          margin-left: 200px;
        }
      }
    }
  }
}

@media (min-width: 280px) and (max-width: 991px) {
  .almSupport {
    li {
      .list-right {
        h3 {
          font-size: 14px;
          span {
            font-size: 12px;
          }
        }
        .timeline-body {
          flex-direction: column;
          .body-left {
            margin-bottom: 10px;
            flex-basis: 0;
            a {
              margin-right: 5px;
            }
          }
          .body-right {
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
