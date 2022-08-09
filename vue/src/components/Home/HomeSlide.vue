<template>
  <swiper
    :modules="modules"
    v-bind="swiperOptions"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <!-- swiper-slide1 -->
    <swiper-slide v-slot="{ isActive }" class="slide1 swiper-no-swiping">
      <div class="section-box">
        <div class="slide-section slide-section-one">
          <div class="slide-content-box" :class="{ animate: isActive }">
            <h1 class="slide-one-header"><strong>aRMS</strong> <span>는</span></h1>
            <p class="p1"><strong>제품(서비스)</strong> 관점의 JIRA 전용 RMS 입니다.</p>
            <p class="p2">
              제품(서비스) 중심으로 Jira Project를 분석하고,<br />
              제품(서비스) 중심으로 요구사항을 Jira Project 에 전파합니다.
            </p>
            <p class="p3">
              <router-link to="/main" class="btn btn-white btn-lg preview-btn">
                Preview &nbsp; <i class="bi bi-chevron-right"></i
              ></router-link>
              <router-link
                to="/DevOps/Home/welcome"
                class="btn btn-transparent btn-lg contact-btn"
              >
                Contact us &nbsp; <i class="bi bi-browser-chrome"></i>
              </router-link>
            </p>
          </div>
        </div>
        <div class="slide-section slide-section-two">
          <img
            src="../../assets/images/home/slider/light-blue-preview-1.png"
            alt="Second slide"
            :class="{ animate: isActive }"
          />
        </div>
      </div>
    </swiper-slide>
    <!-- swiper-slide2 -->
    <swiper-slide v-slot="{ isActive }" class="slide2 swiper-no-swiping">
      <div class="section-title" :class="{ animate: isActive }">
        <h1 class="slide-two-header">
          <strong>aRMS</strong><span>는</span> 제품(서비스) 관점<span>으로</span>
          <strong>다양한 분석 지표</strong
          ><span>를 지속적으로 업데이트 및 제공합니다.</span>
        </h1>
      </div>
      <div class="section-box">
        <div class="slide-section slide-section-one" :class="{ animate: isActive }">
          <div class="img-box img-box1">
            <router-link to="/main">
              <img
                src="@/assets/images/home/slider/light-blue-laptop-transparent.png"
                alt="notebook"
                class="notebook-img"
            /></router-link>
          </div>
          <div class="btn-box">
            <router-link to="/main" class="btn btn-transparent btn-lg">
              Preview &nbsp; <i class="bi bi-chevron-right"></i
            ></router-link>
          </div>
        </div>
        <div class="slide-section slide-section-two" :class="{ animate: isActive }">
          <div class="img-box img-box2">
            <router-link to="/DevOps/Home/Welcome">
              <img
                src="@/assets/images/home/slider/light-blue-laptop-white.png"
                alt=""
                class="notebook-img"
              />
            </router-link>
          </div>
          <div class="btn-box">
            <router-link
              to="/DevOps/Home/Welcome"
              class="btn btn-white btn-lg btn-version-preview"
            >
              Contact us &nbsp; <i class="bi bi-browser-chrome"></i>
            </router-link>
          </div>
        </div>
      </div>
    </swiper-slide>
    <!-- swiper-slide3 -->
    <swiper-slide v-slot="{ isActive }" class="slide3 swiper-no-swiping">
      <div class="section-box">
        <div class="slide-section slide-section-one" :class="{ animate: isActive }">
          <h1 class="slide-three-header">
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
        <div class="slide-section slide-section-two" :class="{ animate: isActive }">
          <img src="@/assets/images/home/slider/light-blue-phone.png" alt="" />
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/bundle';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        navigation: true,
        pagination: { clickable: true },
        speed: 0,
        loop: true,
        noSwiping: true,
      },
    };
  },
  setup() {
    const onSwiper = swiper => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_mixin.scss';

.swiper {
  padding: 25px 0 !important;
  height: 450px;
  width: 100%;

  .swiper-slide {
    .section-box {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      .slide-section {
        position: relative;
        flex-basis: 50%;
        padding: 0 15px;
      }
    }
    //swiper-slide1
    &.slide1 {
      .slide-section-one {
        position: relative;
        width: 100%;
        height: 100%;
        .slide-content-box {
          @include fade-left-animation;
          position: absolute;
          top: 81px;
          right: 15px;
          text-align: right;
          strong {
            font-weight: 500;
          }
          .slide-one-header {
            strong {
              font-size: 45px;
              line-height: 1.1;
            }
            span {
              font-size: 15px;
            }
          }
          .p1,
          .p2 {
            line-height: 1.4;
            margin-bottom: 20px;
          }
          .p1 {
            font-size: 20px;
          }
          .p2 {
            font-size: 17px;
          }
          .p3 {
            .preview-btn {
              margin-right: 10px;
            }
          }
        }
      }
      .slide-section-two {
        align-self: flex-end;
        img {
          @include fade-right-animation;
          max-width: 100%;
          display: block;
          margin: 0 auto;
        }
      }
    }
    //swiper-slide2
    &.slide2 {
      .section-title {
        @include fade-bottom-animation;
        .slide-two-header {
          text-align: center;
          font-size: 25px;
          margin: 10px 0;
          margin-bottom: 40px;
          strong {
            font-weight: 500;
          }
          span {
            font-size: 17px;
          }
        }
      }
      .section-box {
        .img-box {
          display: flex;
          img {
            max-width: 100%;
          }
          &.img-box1 {
            place-content: end;
          }
          &.img-box2 {
            place-content: start;
          }
        }
        .btn-box {
          display: flex;
          place-content: center;
          margin-top: 20px;
        }
        .btn {
          position: absolute;
        }
        .slide-section-one {
          @include fade-left-animation;
        }
        .slide-section-two {
          @include fade-right-animation;
        }
      }
    }
    //swiper-slide3
    &.slide3 {
      .slide-section-one {
        @include fade-leftshort-animation;
        .slide-three-header {
          font-size: 18px;
          line-height: 1.1;
          text-align: right;
          margin: 100px 0 20px 0;
          strong {
            font-weight: 500;
          }
        }
        p {
          display: flex;
          place-content: end;
        }
      }
      .slide-section-two {
        @include fade-top-animation;
        img {
          max-width: 100%;
          margin-top: 35px;
        }
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    text-shadow: rgba(255, 255, 255, 0.6) 0px 0px 8px;
  }
  .swiper-button-prev {
    &:after {
      content: '\2039';
    }
  }
  .swiper-button-next {
    &:after {
      content: '\203a';
    }
  }
  .swiper-pagination {
    bottom: 0;
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      border: none;
      border: 1px solid transparent;
      vertical-align: middle;
      margin-left: 3px;
      &.swiper-pagination-bullet-active {
        width: 12px;
        height: 12px;
        background-color: #e5603b;
      }
    }
  }
}

@media (min-width: 280px) and (max-width: 750px) {
  #wrapper {
    .white-box {
      margin-top: 25px;
      .container {
        padding: 0;
        width: 100%;
        .features-box {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
    .swiper {
      height: 215px;
      padding: 10px 0 !important;
      .swiper-slide {
        .slide-section {
          padding: 0 5px;
        }
        &.slide1 {
          .section-box {
            .slide-section-one {
              .slide-content-box {
                top: 20px;
                .slide-one-header {
                  strong {
                    font-size: 20px;
                  }
                }
                .p1,
                .p2 {
                  display: none;
                }
                .p3 {
                  a {
                    font-size: 13px;
                    &.btn-white {
                      margin-right: 0;
                      margin-bottom: 10px;
                    }
                  }
                }
              }
            }
            .slide-section-two {
              img {
                max-width: 80%;
                margin: 0;
              }
              align-self: center;
            }
          }
        }
        &.slide2 {
          .slide-two-header {
            font-size: 13px;
            margin-bottom: 5px;
          }
          .slide-section {
            img {
              max-width: 80%;
            }
            .btn-box {
              margin-top: 5px;
              a {
                font-size: 13px;
              }
            }

            .img-box1 {
              a {
                display: flex;
                place-content: flex-end;
              }
            }

            &.slide-section-one {
              .btn-box {
                place-content: end;
              }
            }
            &.slide-section-two {
              .btn-box {
                margin: 0;
                place-content: start;
              }
            }
          }
        }
        &.slide3 {
          .slide-section-one {
            h1 {
              margin-top: 10px;
              font-size: 10px;
            }
            .btn {
              font-size: 13px;
              padding: 4px 9px;
            }
          }
          .slide-section-two {
            img {
              margin: 0;
              max-width: 60%;
            }
          }
        }
      }
    }
  }
}
</style>
