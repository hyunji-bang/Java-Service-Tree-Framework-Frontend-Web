<template>
  <header class="page-header">
    <div class="navbar clearfix">
      <div class="logo">
        <h4>
          <router-link to="/" style="margin-right: 5px">
            atlassian-<strong>RMS</strong>
          </router-link>
          <small>Requirements Management System</small>
        </h4>
      </div>
      <ul class="navbar-buttons">
        <li>
          <router-link to="/main" class="btn">
            Preview&nbsp; <i class="bi bi-chevron-right"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/DevOps/welcome" class="btn">
            Contact us&nbsp;
            <i class="bi bi-browser-chrome"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  margin-top: 15px;
  position: relative;
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
    .logo {
      h4 {
        line-height: 20px;
        margin: 10px 0;
        a {
          font-size: 20px;
          font-weight: 400;
        }
        small {
          color: rgb(207, 207, 207);
        }
      }
    }
    .navbar-buttons {
      margin-right: 20px;
      li {
        float: left;

        a {
          margin: 7px 10px;
          padding: 2px 10px;
          font-size: 11.05px;
          line-height: 1.9;
          background: rgba(51, 51, 51, 0.4);
          color: #fff;
          border-color: rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.25);
          align-self: center;
        }
      }
    }
  }
}
@media (min-width: 280px) and (max-width: 991px) {
  .navbar {
    font-size: 13px;
    .logo {
      h4 {
        a {
          font-size: 16px !important;
        }
        small {
          display: none;
        }
      }
    }
    .navbar-buttons {
      margin: 0 !important;
      li {
        a {
          &:nth-child(1) {
            margin-right: 5px !important;
          }
          margin: 0 !important;
        }
      }
    }
  }
}
</style>
