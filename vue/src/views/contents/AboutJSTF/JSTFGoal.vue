<template>
  <div class="conainer">
    <ContentHeader subTitle="jsTree Service Framework<sup>TSF</sup> Goals" />
    <div class="content-section">
      <h3>[효과] jsTree Service Framework<sup>TSF</sup> 기대 효과</h3>

      <ul class="list-unstyled font13 lineh165">
        <li>
          설계 단계를 획기적으로 줄입니다. 물론 PK-FK 스키마 관계에 대한 설계를 단순화 할
          수는 없습니다. 하지만, 기본적인 CRUD 및 명시적인 MetaData Colum을 활용한 PK-FK
          관계 설정의 편의성을 제공합니다.
        </li>
        <li>
          구현 단계의 데이터 객체를 일관된 형태로 Interfaceing 하여 실제 데이터베이스
          지식을 겸하지 않고도 객체를 정의할 수 있는 단순성을 제공합니다.
        </li>
        <li>추가적인 공통 구현이 필요하다면 Super 객체를 통한 공통 구현이 가능하며,</li>
        <li>
          구현 단계의 데이터 객체 처리를 공통화된 서비스 로직이 처리하며, 추가적인 도메인
          데이터 처리는 CallBack 방식 혹은 서비스 내부 구현방식으로 API를 제공함으로서
          서비스 코드 확장성이 제공됩니다.
        </li>
        <li>
          성능* 기능* 보안* 제어*등 기능적, 비기능적 스펙 모두를 Core Service에 적용하여
          처리할 수 있는 집중식 비기능 코드 구현을 제공합니다.
        </li>
        <li>
          따라서, Interface 변경의 적용 검토는 많은 부분 Core Service검토만으로 종결되는
          경우가 많습니다. ( Database, Framework, Server 환경 변경 등 )
        </li>
        <li>
          3번 ~ 6번의 사유로 코드 개발 시간이 가시적으로 단축되며 일관된 코드로
          유지보수성이 향상됩니다.
        </li>
        <li>
          Database SQL 처리의 Alias 제공으로 사용성 데이터 처리와 MetaData 처리 로직을
          구분하여 차용할 수 있도록 제공됩니다.
        </li>
        <li>
          모든 Cloud 서비스에서 동작하도록 Docker Container화 하여 개발 및 테스트, 운영이
          용이합니다.
        </li>
        <li>
          분산환경을 제공하므로 Scale-out 에 대응되어, 대용량 서비스에 최적화 되어
          있습니다. ( BigData, AI 등의 대규모 데이터 처리 서비스 운용에도 사용이
          가능합니다 )
        </li>
      </ul>

      <br />

      <h3>[활용] jsTree Service Framework<sup>TSF</sup>활용 분야</h3>

      <p>Java Application 적용 가능한 모든 서비스 및 제품</p>

      <br />
      <p>표준 프로젝트 관리</p>
      <p>관리 및 현황 파악. 산출물의 온라인 화</p>
      <p>
        프로젝트의 모든 활동은 이슈로 관리되며, 프로젝트의 산출물은 온라인 문서로
        관리됩니다. 따라서 현황파악 및 사후 프로젝트의 유지 및 확장을 보장할 수 있습니다.
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
