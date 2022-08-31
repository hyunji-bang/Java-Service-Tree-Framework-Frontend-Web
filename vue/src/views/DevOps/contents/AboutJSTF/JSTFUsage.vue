<template>
  <div class="conainer">
    <ContentHeader subTitle="jsTree Service Framework<sup>TSF</sup> Usage" />
    <div class="content-section">
      <h3>[사용법] jsTree Service Framework<sup>TSF</sup> 활용 방법</h3>

      <ul>
        <li>TSF는 전자정부 프레임워크를 기반으로 확장한 프로젝트 템플릿을 제공합니다.</li>
        <li>
          다음 예제는 TSF를 Download하고 곧바로 프로젝트를 시작할 수 있는 기본 사용법을
          설명합니다.
        </li>
        <li>TSF는 Project Architect Tool로 Maven 3.0.5 이상을 사용합니다.</li>
      </ul>

      <br />

      <h3>[리소스 복사] jsTree Service Framework<sup>TSF</sup>Download</h3>

      <p>Git Clone https://github.com/jstree/jsTree-Service-Framework-Backend-App.git</p>
      <p>Git Clone https://github.com/jstree/jsTree-Service-Framework-Frontend-App.git</p>

      <br />
      <p>
        TSF는 전통적인 Java IDE인 Eclipse를 지원하고, 최근 인기있는 툴인 InteliJ를
        지원합니다.
      </p>
    </div>
  </div>
</template>
<script setup>
import ContentHeader from '@/components/DevOps/common/ContentHeader.vue';
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
