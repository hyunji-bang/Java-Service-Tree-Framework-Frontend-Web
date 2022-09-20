<template>
  <div class="conainer">
    <ContentHeader :subTitle="subTitle" :subText="subText" />
    <div class="content-section">
      <h3>jsTree Service Framework<sup>TSF</sup></h3>
      <br />
      <p>
        우리<sup>[1]</sup>는
        <b
          >엄청나게 빠르게 개발하고<sup>time</sup>, 높은 품질을
          보장하면서도<sup>quality</sup>, 비용을 줄일 수 있는 방안<sup>cost</sup></b
        >을 제시한다<br />우리는
        <b class="blue-text"
          ><a
            href="https://zetawiki.com/wiki/%EC%9D%80%ED%83%84%ED%99%98%EC%9D%80_%EC%97%86%EB%8B%A4"
            target="_blank"
            >No Silver Bullets</a
          ></b
        ><sub class="blue-text">은탄환은 없다.</sub>
        주장을, 이제 정면으로 반박하고 반증하고자 한다.
      </p>
      <br />
      <p>
        우리는 jsTree Service FrameworkTSF을 통해 단순히 템플릿 프로젝트, 라이브러리를
        제공하는데 그 목적을 다하지 않는다.
      </p>
      <ul class="explain-list">
        <li>
          우리는 세련된 기법으로 프로젝트 문서를 온라인화 하는 방법을 소개한다.
          <a href="https://www.pmi.org/pmbok-guide-standards" target="_blank"
            ><sub class="blue-text">with PMBOK</sub></a
          >
        </li>
        <li>
          점증적 개발을 지원하는 단계별 표준적인 개발 지원도구를 소개한다.<sub
            >심지어 이 도구들은 모두 가상화 이미지로 제공될 수 있다.</sub
          >
        </li>
        <li>
          통일된 프로그래밍 환경을 제공한다.<sub
            >project architect & project template & project source code</sub
          >
        </li>
        <li>
          더불어 서비스 레이어 코드 작성시 적용할 jsTree Service Framework<sup>TSF</sup
          ><b>아키텍쳐와 디자인은 100% 하위 호환성을 가진체 Update</b>를 제공한다.
        </li>
      </ul>
      <br />
      <p>
        프로젝트가 거듭될수록 쌓이는 지식은 다음 프로젝트에 적용되어야 한다.
        <br /><small
          >-일관된 서비스코드 작성을 위한, 재사용 가능하게 협업화된 클래스를 제공하는
          <b>서비스 프레임워크가 필요한 시점이다.</b></small
        >
      </p>
      <!-- attachment -->
      <div class="attachment-block">
        <img
          class="attachment-img"
          src="@/assets/images/devops/welcome/jstree.png"
          alt="Attachment Image"
        />

        <div class="attachment-pushed">
          <h4 class="attachment-heading">
            <router-link to="/Welcome">jsTree Service Framework</router-link>
          </h4>
          <div class="attachment-text">
            Description about the attachment can be placed here. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry...
            <router-link to="/Welcome">more</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ContentHeader from '@/components/common/ContentHeader.vue';
const subTitle = '⊰ Welcome™ ⊱';
const subText =
  '313 DEV GRP의 표준 개발 방법을 설명하고, 지원하며<br />Java Service Tree Framework에 대한 소개를 시작합니다.';
</script>
<style lang="scss" scoped>
.content-section {
  /* contents 내부 리스트 */
  .explain-list {
    li {
      margin-left: 20px;
      list-style: circle;
    }
  }
  small {
    margin-left: 20px;
  }
  /* contents 하단 링크 박스 */
  .attachment-block {
    display: flex;
    background-color: rgba(51, 51, 51, 0.2);
    padding: 10px;
    .attachment-img {
      max-width: 100px;
      max-height: 100px;
      flex-basis: 100px;
    }
    .attachment-pushed {
      flex-basis: calc(100% - 100px);
      margin-left: 10px;
      .attachment-heading {
        color: #3c8dbc;
        font-size: 19px;
      }
      .attachment-text {
        font-size: 14px;
        a {
          color: #3c8dbc;
        }
      }
    }
  }
}
</style>
