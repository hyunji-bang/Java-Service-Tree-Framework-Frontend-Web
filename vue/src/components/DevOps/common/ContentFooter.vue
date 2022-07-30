<template>
  <div class="share-box">
    <span class="share-btn-box">
      <button type="button"><i class="bi bi-share"></i></button>
      <button type="button"><i class="bi bi-hand-thumbs-up"></i></button>
    </span>
    <span>{{ shareInfo.likesCount }} likes - {{ userInfo.length }} comments</span>
  </div>
  <div class="content-footer">
    <div class="box-comment" v-for="(user, idx) in userInfo" :key="idx">
      <img class="img-circle" :src="user.userImg" alt="User Image" />
      <div class="comment-text">
        <span class="username">
          {{ user.userName }}
          <span class="text-muted">{{ user.time }}</span>
        </span>
        <br />
        {{ user.comment }}
      </div>
    </div>

    <form action="#" method="post" id="form">
      <img
        class="img-circle"
        src="../../../assets/images/devops/facebook.png"
        alt="Alt Text"
      />
      <div class="img-push">
        <input
          type="text"
          class="form-control input-sm"
          placeholder="Press enter to post comment"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ContentFooter',
  data() {
    return {
      userInfo: [
        {
          userName: 'Maria Gonzales',
          userImg: require('../../../assets/images/devops/kakao.png'),
          time: '8:03 PM Today',
          comment:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
          userName: 'Nora Havisham',
          userImg: require('../../../assets/images/devops/naver.png'),
          time: '8:03 PM Today',
          comment:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        },
      ],
      shareInfo: {
        likesCount: 45,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.share-box {
  margin: 0 2.5641% 10px 2.5641%;
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: end;*/
  button {
    border: none;
    width: 30px;
    height: 30px;
    background-color: rgba(51, 51, 51, 0.425);
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    .bi {
      font-size: 16px;
      line-height: 30px;
      color: #fff;
    }
  }
}

.content-footer {
  margin: 0 2.5641%;
  background: rgba(51, 51, 51, 0.425);
  .img-circle {
    display: block;
    width: 30px;
    height: 30px;
    flex-basis: 30px;
  }
  .box-comment {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    align-items: center;
    border-bottom: 0.1px solid rgba(255, 255, 255, 0.1);
    .comment-text {
      margin-left: 20px;
      padding: 6px;
      flex-basis: calc(100% - 30px);
      .username {
        color: #a4c6ff;
        .text-muted {
          float: right;
        }
      }
    }
  }
  #form {
    width: 100%;
    padding: 10px;
    display: flex;
    .img-push {
      margin-left: 20px;
      border: none;
      flex-basis: calc(100% - 30px);
      input {
        width: 100%;
        height: 30px;
        border: none;
        color: #f8f8f8;
        background-color: rgba(51, 51, 51, 0.425);
        &::placeholder {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
