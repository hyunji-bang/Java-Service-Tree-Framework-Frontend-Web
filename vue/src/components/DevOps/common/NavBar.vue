<template>
  <nav class="sidebar">
    <ul class="accordion" id="side-nav-bar">
      <li
        class="accordion-item"
        v-for="(list, idx) in navList"
        :key="idx"
        ref="detailList"
        :data-title="list.title.replace(/(\s*)/g, '')"
      >
        <div class="accordion-header" :id="`heading${idx}`">
          <router-link
            to="/DevOps/Home/Welcome"
            v-if="list.title == 'Welcome'"
            ref="firstmenu"
          >
            <i :class="list.icon"></i>
            <span
              class="accordion-button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse${idx}`"
            >
              {{ list.title }}
            </span>
          </router-link>
          <a
            v-if="list.title !== 'Welcome'"
            class="accordion-button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse${idx}`"
          >
            <i :class="list.icon"></i>
            <span>
              {{ list.title }}
            </span>
            <i class="bi bi-chevron-left arrow"></i>
          </a>

          <ul
            :id="`collapse${idx}`"
            class="accordion-collapse collapse"
            data-bs-parent="#side-nav-bar"
          >
            <li
              class="accordion-body"
              v-for="(sublist, subIdx) in list.children"
              :key="subIdx"
            >
              <router-link
                :to="`/DevOps/${list.title.replace(/(\s*)/g, '')}/${sublist
                  .replace(/(\s*)/g, '')
                  .replace('?', '')}`"
              >
                {{ sublist }}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    navList() {
      return this.$store.state.navMenuList;
    },
  },

  mounted() {
    const detailList = this.$refs.detailList;
    detailList.forEach((list, idx) => {
      const path = this.$route.path.split('/');
      const title = list.dataset.title;
      const titleEl = list.children[0].children[0];
      const subMenuEl = list.children[0].children[1];
      if (path.includes(title)) {
        titleEl.classList.add('active-blue');
        titleEl.classList.remove('collapsed');
        subMenuEl.classList.add('show');
        titleEl.setAttribute('aria-expanded', 'true');
      }
      if (idx === 0) {
        list.addEventListener('click', clickMenuRemoveActive);
      } else {
        subMenuEl.childNodes.forEach(node => {
          node.addEventListener('click', clickMenuRemoveActive);
        });
      }

      function clickMenuRemoveActive() {
        const newList = [...detailList];
        newList.splice(detailList.indexOf(list), 1);
        newList.forEach(newlist =>
          newlist.children[0].children[0].classList.remove('active-blue'),
        );
        titleEl.classList.add('active-blue');
      }
    });
  },
};
</script>

<style lang="scss" scoped>
nav.sidebar {
  position: absolute;
  top: 122px;
  left: 0;
  width: 190px;
  padding: 10px 0;
  font-weight: 300;
  .accordion {
    .accordion-item {
      font-size: 13px;
      color: #fff;
      cursor: pointer;
      font-weight: 500;
      .accordion-header {
        a {
          padding: 10px 20px;
          display: inline-block;
          width: 100%;
          position: relative;
          transition: rotate 0.5s;
          transform: rotate(0deg);
          &[aria-expanded='true'] {
            .arrow {
              transition: all 0.5s;
              transform: rotate(-90deg);
            }
          }
          .bi:nth-child(1) {
            margin-right: 10px;
          }
          .arrow {
            position: absolute;
            right: 0;
          }

          &.router-link-exact-active {
            color: lightblue !important;
          }
          &.active-blue {
            color: lightblue !important;
          }
        }
      }
      .accordion-collapse {
        .accordion-body {
          a {
            padding: 4px 20px 4px 50px;
          }
        }
      }
    }
  }
}
@media (min-width: 280px) and (max-width: 991px) {
  .sidebar {
    transform: translateX(-2000px);
    transition: 0.5s all;
  }
}
</style>
