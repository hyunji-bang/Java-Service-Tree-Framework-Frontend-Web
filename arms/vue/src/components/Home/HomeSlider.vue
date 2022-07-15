<template>
  <div class="content">
    <div
      id="carousel-landing"
      class="carousel slide carousel-landing carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <ol class="carousel-indicators">
        <li data-bs-target="#carousel-landing" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carousel-landing" data-bs-slide-to="1" class=""></li>
        <li data-bs-target="#carousel-landing" data-bs-slide-to="2" class=""></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item item active">
          <div class="row">
            <div class="col-xs-6">
              <div class="animated fadeInLeftBig">
                <h1 class="slide-one-header">
                  <strong>aRMS</strong> <span class="font15">는</span>
                </h1>
                <p class="lead hidden-xs">
                  <strong>제품(서비스)</strong> 관점의 JIRA 전용 RMS 입니다.
                </p>
                <p class="lead hidden-xs font17">
                  제품(서비스) 중심으로 Jira Project를 분석하고,<br />
                  제품(서비스) 중심으로 요구사항을 Jira Project 에 전파합니다.
                </p>
                <p>
                  <router-link to="/main" class="btn btn-lg btn-white">
                    Preview &nbsp; <i class="fa fa-angle-right"></i
                  ></router-link>
                  <a
                    href="http://www.313.co.kr"
                    style="margin-left: 13px"
                    class="btn btn-lg btn-transparent"
                  >
                    Contact us &nbsp; <i class="fa eicon-qq"></i>
                  </a>
                </p>
              </div>
            </div>
            <div class="col-xs-6">
              <div class="text-align-center animated fadeInRightBig">
                <img
                  src="../../assets/images/home/slider/light-blue-preview-1.png"
                  alt="Second slide"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item item">
          <h1
            class="slide-two-header text-align-center animated fadeInDown"
            style="font-size: 24px !important"
          >
            <strong>aRMS</strong><span class="font16">는</span> 제품(서비스) 관점<span
              class="font16"
              >으로</span
            >
            <strong>다양한 분석 지표</strong
            ><span class="font16">를 지속적으로 업데이트 및 제공합니다.</span>
          </h1>
          <div class="row">
            <div class="col-xs-6">
              <div class="animated fadeInLeftBig">
                <p>
                  <router-link to="/main">
                    <img
                      src="../../assets/images/home/slider/light-blue-laptop-transparent.png"
                      alt=""
                  /></router-link>
                </p>
                <p class="text-align-center">
                  <router-link
                    to="/main"
                    class="btn btn-transparent btn-lg btn-version-preview"
                  >
                    Preview &nbsp; <i class="fa fa-angle-right"></i
                  ></router-link>
                </p>
              </div>
            </div>
            <div class="col-xs-6">
              <div class="animated fadeInRightBig">
                <p>
                  <a href="http://www.313.co.kr">
                    <img
                      src="../../assets/images/home/slider/light-blue-laptop-white.png"
                      alt=""
                    />
                  </a>
                </p>
                <p class="text-align-center">
                  <a
                    href="http://www.313.co.kr"
                    class="btn btn-white btn-lg btn-version-preview"
                  >
                    Contact us &nbsp; <i class="fa eicon-qq"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item item">
          <div class="row">
            <div class="col-xs-6">
              <div class="animated fadeInLeft">
                <h1 class="slide-three-header" style="font-size: 17px !important">
                  Jira를 쓰고 계십니까?
                  <br /><br />
                  제품(서비스)를 만들고 계십니까?
                  <br /><br />
                  <strong>aRMS가 필요합니다.!</strong>
                  <br /><br />
                  제품(서비스)의 요구사항을 관리 하고,
                  <br /><br />
                  제품(서비스)의 진척도를 확인 하고,
                  <br /><br />
                  제품(서비스)의 출시를 결정 할 수 있습니다.
                </h1>
                <p>
                  <router-link to="/main" class="btn btn-white btn-lg" target="_blank"
                    >Test It</router-link
                  >
                </p>
              </div>
            </div>
            <div class="col-xs-6">
              <p class="animated fadeInUp" style="margin-top: 20px">
                <img src="../../assets/images/home/slider/light-blue-phone.png" alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="left carousel-control carousel-control-landing carousel-control-prev"
        data-bs-target="#carousel-landing"
        data-bs-slide="prev"
      >
        <span class="icon-prev"></span>
      </div>
      <div
        class="right carousel-control carousel-control-landing carousel-control-next"
        data-bs-target="#carousel-landing"
        data-bs-slide="next"
      >
        <span class="icon-next"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.carousel-indicators {
  margin-left: calc(-30% + 2px);
  li {
    margin-right: 5px;
    &.active {
      margin-right: 4px;
    }
  }
}
</style>
