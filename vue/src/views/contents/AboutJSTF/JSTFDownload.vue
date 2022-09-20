<template>
  <div class="conainer">
    <ContentHeader
      subTitle="jsTree Service Framework<sup>TSF</sup> 소스
            다운로드"
    />
    <div class="content-section">
      <h3>jsTree Service Framework<sup>TSF</sup> 소스 다운로드</h3>
      <ul>
        <li>
          Apache Maven Resources Plugin 3.1.0은 소스 형식으로 배포됩니다. Apache Maven
          Resources Plugin을 직접 빌드하려면 소스 아카이브를 사용하십시오. 그렇지 않으면
          중앙 저장소에서 준비된 2 진 아티팩트를 사용하기 만하면됩니다.
        </li>
        <li>
          TSF는 소스 코드 형식으로 배포됩니다. TSF를 직접 빌드하려면 소스 아카이브를
          사용하십시오.
        </li>
        <li>그렇지 않으면 중앙 저장소에서 준비된 2진 아티팩트를 사용 할 수 있습니다.</li>
        <li>
          또한, 클라우드 환경을 위한 도커 이미지를 Docker Hub 또는 빌드 이미지로 생성 할
          수 있습니다.
        </li>
      </ul>

      <br />
      <h3>jsTree Service Framework<sup>TSF</sup> 미러</h3>
      <p>
        현재 선택된 미러는 http://www.313.co.kr/nexus 입니다. 이 모든 미러가 실패 할 경우
        사용할 수 있어야하는 백업 미러 (미러 목록 끝에 있음)가 있습니다.
      </p>
      <p>https://github.com/jstree/jsTree-Service-Framework-Backend-App/releases</p>

      <br />
      <h3>jsTree Service Framework<sup>TSF</sup> 컨테이너</h3>
      <p>
        현재 선택된 서버 컨테이너는
        https://hub.docker.com/r/313devgrp/jstree-service-framework-backend-app/ 입니다.
      </p>
    </div>
  </div>
</template>
<script setup>
import ContentHeader from '@/components/common/ContentHeader.vue';
</script>
<style lang="scss" scoped>
.content-section {
  h3 {
    font-weight: 600;
    color: lightblue;
  }
  ul {
    margin: 20px;
    li {
      margin-bottom: 10px;
      list-style-type: circle;
    }
  }
}
</style>
