<template>
  <div class="conainer">
    <ContentHeader subTitle="jsTree Service Framework<sup>TSF</sup> FAQ" />
    <div class="content-section">
      <h3>jsTree Service Framework<sup>TSF</sup> 리소스란 무엇입니까?</h3>
      <ul>
        <li>
          리소스는 프로젝트에서 사용하는 비 소스 코드 파일입니다. 예를 들어, 특성 파일,
          이미지 및 XML 파일이 있습니다.
        </li>
      </ul>

      <br />
      <h3>
        라이프 사이클에서
        <strong>jsTree Service Framework<sup>TSF</sup>는 언제 사용됩니까?</strong>
      </h3>
      <p>TSF는 어플리케이션 라이프 사이클의 모든 단계에서 사용됩니다.</p>

      <br />
      <h3>TSF는 PMBOK 기준으로 다음을 지원하고 있습니다.</h3>
      <p>착수 : 기획 문서를 온라인으로 공유할 수 있는 표준 포맷을 제공합니다.</p>
      <p>기획 : 기획을 기준으로 요구사항 관리 표준 문서를 제공합니다.</p>
      <p>실행 및 이행 : 요구사항을 기준으로 TASK로 전환하는 시스템을 제공합니다.</p>
      <p>
        감시 및 통제 : 빌드 시스템과 연계된 정적 분석을 제공하며, 이슈 관리 시스템을
        제공합니다.
      </p>
      <p>
        종료 : 빌드 결과를 컨테이너화 하고, 테스트 환경과 릴리즈 환경에 각각 배포 할 수
        있는 시스템을 제공합니다.
      </p>
    </div>
  </div>
</template>
<script setup>
import ContentHeader from '@/components/common/ContentHeader.vue';
</script>
<style lang="scss" scoped>
h3 {
  color: lightblue;
  font-weight: 500;
}
ul {
  margin-left: 20px;
  li {
    list-style-type: circle;
    margin-bottom: 10px;
  }
}
</style>
