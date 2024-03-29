<template>
  <div class="conainer">
    <ContentHeader subTitle="jsTree Service Framework<sup>TSF</sup> Introduction" />
    <div class="content-section">
      <h3>[정의] jsTree Service Framework<sup>TSF</sup>란?</h3>

      <p class="font13 lineh165">
        소프트웨어의 비즈니스 로직 구현시, 미리 구현된 TSF 모델을 확장하여(M)<br />
        Service, DAO 등 구현 부분에 해당하는 Base Code를 재사용 가능하게 협업화된
        클래스들을 제공하는 것
      </p>

      <br />
      <h3>[개요] jsTree Service Framework<sup>TSF</sup>소개</h3>

      <ul>
        <li>
          jsTree Service Framework는 날로 복잡해지고, 급격하게 변화하는 고객의 요구사항을
          빠르게 반영하면서, 어플리케이션의 품질과 구조를 일정하게 유지하기 위한 서비스
          레이어 프레임워크입니다.
        </li>
        <li>
          jsTree Service Framework는 일관된 객체 모델을 활용하여 개발 생산성과 품질 그리고
          수시 유지보수에 대한 적응성 등을 동시에 보장하는 어플리케이션 서비스 프레임워크
          입니다.
        </li>
        <li>
          본 프레임워크의 목적은 확장된 단일 모델을 활용하여 어플리케이션을 단일 로직에
          대응 할 수 있음을 근간으로 하고 있습니다.
        </li>
        <li>
          프레임워크 효용성 증명 방법은 확장 Tree 모델만을 활용하여 토론형 비교 사이트를
          개발 후, 실서비스에서 MetaData만을 구현하는 수준만으로도 사용자의 요구사항을
          수렴할 수 있다는 명제를 집중하여 구현하고 있습니다.
        </li>
        <li>
          또한 활용성 측면을 고려하여, 전자정부 표준 프레임워크를 기반으로 본 서비스
          프레임워크를 개발하여, 중소기업부터 대기업까지 폭넓게 사용할 수 있도록
          하였습니다.
        </li>
        <li>
          구현 결과 RDB를 활용한 대부분의 Java Application 로직을 단일하게 변경 및 개발 할
          수 있었으며, Application 구현과 운용에 매우 다양한 긍정적 효과를 확인 할 수
          있었습니다.
        </li>
      </ul>

      <br />

      <h3>[계기] jsTree Service Framework<sup>TSF</sup>개발 배경</h3>

      <p>
        프레임워크는 구현 시 패턴을 제공하는 방식이나, 몇 가지 기능적인 부분을 제외한
        서비스 구현 설계는 제시하지 않는다. 따라서 프레임워크를 사용하지만, 실제 구현은
        패턴화 되지 않고, 요청 별 처리 프로세스를 만드는 방식을 취하다보니 단편화 현상이
        발생하고, 이는 개발 일관성과 유지보수성에 악영향을 미치게 된다.
      </p>
      <p>
        즉, 프레임워크를 사용하여 얻어지는 이득이나, 수준은 일정 범위를 벗어나게 되면, 그
        실효성이 없어지는 현상이 일어난다. 이 현상은 서비스 코드를 작성하는 개발자의
        수준과 철학이 코드에 반영되게 되며, 실제 프레임워크가 관여할 수 없는 부분이기
        때문이다.
      </p>
      <p>
        즉, 고객의 요구사항이 변경되거나 스펙이 바뀌게 되면, 프레임워크 레이어상의 변경이
        아닌 개발 코드의 변경은 프로세스 요청마다 구현한 코드의 개별 구성 별로 변경이
        이루어지다 보니 점차 코드의 품질이 저하되는 현상이 발생하게 된다.
      </p>
      <p>
        이에, TSF는 날로 복잡해지고, 급격하게 변화하는 고객의 요구사항을 빠르게 반영하면서
        어플리케이션 품질을 일정하게 유지하기 위하여 일관된 객체 모델을 활용, 개발
        생산성과 품질 그리고 수시 유지보수에 대한 적응성등을 동시에 보장하는
        어플리케이션의 아키텍처가 필요함에 따라 TSF(jsTree Service Framework)를 연구 및
        구현하게 되었다.
      </p>
      <p>
        본 프로젝트의 목적은 확장된 Tree 모델을 활용하여 어플리케이션을 단일 로직에 대응
        할 수 있음을 증명하는데 있다. ( 중앙 집중형 아키텍쳐 )
      </p>
      <p>
        연구 방법은 기반 프레임워크인 Spring, Struts, iBatis, Hibernate등을 기준으로 확장
        Tree Model을 구현하며, Service Layer의 API Code를 제공하는데 집중된다.
      </p>

      <p>
        최종적으로는 TSF 와 Egovframework를 통합 및 적응 할 수 있는 패키지로 이행한다.
      </p>
      <p>
        또한, Cloud 시대에 대응하기 위하여 Docker 컨테이너화 및 분산 아키텍쳐를 적용하여
        보안성, 확장성, 생산성, 성능 및 품질을 강화하여 배포하는데 최종 목적을 가진다.
      </p>

      <br /><br />
      <blockquote class="font13">
        <p>우리의 TSF 1차 릴리즈는 이미 배포된 상태입니다. ( 깃허브 참조 )</p>
        <p>우리는 TSF 2차 릴리즈를 글로벌 오픈프론티어와 함께 발전하고 확산하며,</p>
        <p>우리의 TSF가 좀더 많이 쓰이고, 좀더 편하기 쓰이기 위하여 노력할 것입니다.</p>
      </blockquote>
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
