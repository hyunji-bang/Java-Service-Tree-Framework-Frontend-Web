<template>
  <div class="white-box">
    <div class="container">
      <div class="about-title">
        <h2>atlassian<strong>RMS</strong></h2>
        <p>
          atlassian <strong>Requirements Managment System</strong> 은 전세계에서 유일한
          Jira 를 기반한 요구사항 관리 시스템입니다.
        </p>
      </div>
      <div class="features-box">
        <div :key="index" v-for="(colData, index) in armsServiceList" class="features">
          <div class="icon-box">
            <div class="icon" :style="{ background: colData.iconColor }">
              <i v-bind:class="colData.iconImagePath"></i>
            </div>
          </div>
          <div class="text-box">
            <h4>{{ colData.title }}</h4>
            <p v-html="colData.subTitle"></p>
          </div>
        </div>
      </div>
    </div>
    <p class="preview">
      <router-link to="/white" class="btn"
        >&nbsp; Preview the Demo Version &nbsp;</router-link
      >
    </p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      armsServiceList: [
        {
          title: 'Scope',
          subTitle: '제품(서비스)의 요구사항이 Jira의 END USER 까지 공유',
          iconImagePath: 'bi bi-type-bold',
          iconColor: '#e5603b',
        },
        {
          title: 'Cost',
          subTitle: '제품(서비스)의 Jira 분석<br />&#10132; 정확한 Resource 통계',
          iconImagePath: 'bi bi-magic',
          iconColor: '#eac85e',
        },
        {
          title: 'Time',
          subTitle: '제품(서비스) Jira Project 맵핑<br />&#10132; 실질적인 진척도 측정',
          iconImagePath: 'bi bi-wrench-adjustable',
          iconColor: '#56bc76',
        },
        {
          title: '제품(서비스)',
          subTitle:
            '<p>aRMS는 제품과 서비스를 기준 <br />&#10132; 데이터를 구조화 합니다.</p>',
          iconImagePath: 'bi bi-bar-chart-steps',
          iconColor: '#618fb0',
        },
        {
          title: '요구사항',
          subTitle:
            '<p>ARMS는 제품과 서비스를 기준<br />&#10132; 요구사항을 관리합니다.</p>',
          iconImagePath: 'bi bi-check-lg',
          iconColor: '#8cbf26',
        },
        {
          title: 'Test(QA)',
          subTitle:
            '<p>ARMS는 제품과 서비스를 기준<br />&#10132; 요구사항의 테스트를 관리</p>',
          iconImagePath: 'bi bi-box-seam-fill',
          iconColor: '#4ab0ce',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.white-box {
  margin: 85px 0 30px 0;
  position: relative;
  padding: 20px;
  background: #fff;
  color: #666;
  .container {
    margin: 0 auto;
    padding-left: 98px;
    .about-title {
      h2 {
        font-size: 29.25px;
        line-height: 40px;
        font-weight: 500;
      }
      p {
        font-size: 14px;
        margin: 0 0 10px;
        strong {
          font-weight: 500;
        }
      }
    }

    .features-box {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 60px;
      margin-top: 60px;
      .features {
        display: flex;
        flex-direction: row;
        .icon-box {
          flex-basis: 33%;
          position: relative;
          .icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            display: inline-block;
            height: 60px;
            width: 60px;
            font-size: 40px;
            line-height: 60px;
            vertical-align: middle;
            border-radius: 50%;
            color: #fff;
            margin: 0 15px 0 15px;
            i {
              margin-left: 10px;
              vertical-align: top;
            }
          }
        }
        .text-box {
          text-align: center;
          margin: 0 15px 0 15px;
          flex-basis: 66%;
          h4 {
            font-size: 16.25px;
            font-weight: 500;
          }
          p {
            font-size: 14px;
            margin: 0 0 10px;
          }
        }
      }
    }
  }
  .preview {
    margin: 40px 0;
    text-align: center;
    a {
      padding: 8px 18px;
      font-size: 16.25px;
      line-height: 1.33;
      color: #fff;
      background-color: #e5603b;
      border-color: rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
