<template>
  <div class="conainer">
    <ContentHeader subTitle="jsTree Service Framework<sup>TSF</sup> Contributors" />
    <div class="content-section">
      <ul class="contributorList">
        <li v-for="(list, idx) in contributorList" :key="idx">
          <!-- profile -->
          <div class="profile">
            <div class="profileImg">
              <img :src="list.profileImg" alt="profileimg" />
            </div>
            <h2>{{ list.name }}</h2>
            <p>{{ list.position }}</p>
          </div>

          <!-- education -->
          <div class="education">
            <h2><i class="fa-solid fa-book"></i> Education</h2>
            <p>{{ list.education }}</p>
          </div>

          <!-- location -->
          <div class="location">
            <h2><i class="fa-solid fa-location-dot"></i> Location</h2>
            <p>{{ list.location }}</p>
          </div>

          <!-- skill -->
          <div class="skill">
            <h2><i class="fa-solid fa-pencil"></i> Skills</h2>
            <div class="skill">
              <span v-for="(skill, skillIdx) in list.skill" :key="skillIdx">{{
                skill
              }}</span>
            </div>
          </div>

          <!-- note -->
          <div class="note">
            <h2><i class="fa-solid fa-file"></i> Notes</h2>
            <p>{{ list.note }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import ContentHeader from '@/components/common/ContentHeader.vue';
const contributorList = [
  {
    profileImg: require('@/assets/images/devops/contributor/ldm.jpg'),
    name: 'Dongmin.Lee',
    position: 'PM,SE,Master Developer',
    education: 'M.S in Software from the Korea University of Seoul at Korea',
    location: 'Baltimore, USA',
    skill: ['Project Management', 'Architect', 'Development', 'Database Admin'],
    note: '겸손.과묵.꾸준.행동.간절.인내',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/ldm.jpg'),
    name: 'Suwon.Ham',
    position: 'PM,SE,Master Developer',
    education: 'M.S in Software from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['Project Management', 'Architect', 'Development', 'Database Admin'],
    note: '겸손.과묵.꾸준.행동.간절.인내',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/ldm.jpg'),
    name: 'Hyunji.Bang',
    position: 'PM,SE,Master Developer',
    education: 'M.S in Software from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['Project Management', 'Architect', 'Development', 'Database Admin'],
    note: '겸손.과묵.꾸준.행동.간절.인내',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/pjy.jpeg'),
    name: 'Jiyun.Park',
    position: 'FE Developer',
    education: 'Business Administration from the Korea National Open University',
    location: 'Seoul, Korea',
    skill: ['HTML', 'CSS', 'Javascript'],
    note: '성실함',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/lhj.jpg'),
    name: 'Hyejin.lee',
    position: 'Publisher,Front Developer',
    education: 'B.S. in Computer Science from the CHU University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['UI Design', 'Coding', 'Javascript', 'CSS', 'HTML'],
    note: '토닥토닥',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/yjw.jpg'),
    name: 'JungWoo.Yoo',
    position: 'JAVA Lead Developer',
    education: 'B.S. in Computer Science from the Seoul University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Spring', 'System', 'Database', 'Hibernate'],
    note: '노력하는 자 결국엔 승리한다.',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/cms.jpg'),
    name: 'MinSuk.Choi',
    position: 'JAVA Lead Developer',
    education: 'B.S. in Computer Science from the KunKuk University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Spring', 'iBatis', 'Hibernate', 'SQL'],
    note: '프리랜서',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/son.jpg'),
    name: 'HoSung.Son',
    position: 'JAVA Lead Developer',
    education: 'B.S. in Computer Science from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Spring', 'iBatis', 'Hibernate', 'SQL'],
    note: '이스트소프트',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/kbw1.png'),
    name: 'ByungWoo.Kim',
    position: 'Project Manager',
    education: 'B.S. in Computer Science from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['PMP', 'CI', 'CD', 'ALM', 'Managing'],
    note: '삼성 SDS',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/okw1.jpg'),
    name: 'GwonWoo.Oh',
    position: 'Project Manager',
    education: 'B.S. in Computer Science from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Android', 'Front Framework', 'Json'],
    note: 'Government Project 리더',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/kimdaegun.jpg'),
    name: 'DaeGun.Kim',
    position: 'JAVA Lead Developer',
    education: 'B.S. in Computer Science from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Spring', 'System', 'Database', 'Hibernate'],
    note: '노력하는 자 결국엔 승리한다.',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/rkh1.jpg'),
    name: 'GangHa.Ryu',
    position: 'JAVA Lead Developer',
    education: 'B.S. in Computer Science from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Spring', 'System', 'Database', 'Hibernate'],
    note: '노력하는 자 결국엔 승리한다.',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/jkw.jpg'),
    name: 'KyungWon.Jo',
    position: 'JAVA Lead Developer',
    education: 'B.S. in Computer Science from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Spring', 'System', 'Database', 'Hibernate'],
    note: '노력하는 자 결국엔 승리한다.',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/jkh.jpg'),
    name: 'KyungHun.Jeon',
    position: 'JAVA Lead Developer',
    education: 'B.S. in Computer Science from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Spring', 'System', 'Database', 'Hibernate'],
    note: '노력하는 자 결국엔 승리한다.',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/jsy.jpeg'),
    name: 'SiYeon.Jung',
    position: 'JAVA Lead Developer',
    education: 'B.S. in Computer Science from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Spring', 'System', 'Database', 'Hibernate'],
    note: '노력하는 자 결국엔 승리한다.',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/kkj.jpg'),
    name: 'KyungGin.Kim',
    position: 'JAVA Lead Developer',
    education: 'B.S. in Computer Science from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Spring', 'System', 'Database', 'Hibernate'],
    note: '노력하는 자 결국엔 승리한다.',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/jjs.jpg'),
    name: 'JongSuk.Jung',
    position: 'JAVA Lead Developer',
    education: 'B.S. in Computer Science from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Spring', 'System', 'Database', 'Hibernate'],
    note: '노력하는 자 결국엔 승리한다.',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/jwg.jpg'),
    name: 'WonGi.Jung',
    position: 'JAVA Lead Developer',
    education: 'B.S. in Computer Science from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Spring', 'System', 'Database', 'SQL'],
    note: '노력하는 자 결국엔 승리한다.',
  },
  {
    profileImg: require('@/assets/images/devops/contributor/jsr.jpg'),
    name: 'SamRyung.Jung',
    position: 'JAVA Lead Developer',
    education: 'B.S. in Computer Science from the Korea University of Seoul at Korea',
    location: 'Seoul, Korea',
    skill: ['JAVA', 'Spring', 'System', 'Database', 'SQL'],
    note: '노력하는 자 결국엔 승리한다.',
  },
];
</script>
<style lang="scss" scoped>
.contributorList {
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  li {
    background-color: rgba(51, 51, 51, 0.425);
    border-radius: 20px;
    padding: 20px;
    font-size: 14px;
    > div {
      padding: 10px 0;
      border-bottom: 1px solid rgba(192, 192, 192, 0.404);
    }
    h2 {
      color: lightblue;
    }
    /* 상단 profile */
    .profile {
      display: flex;
      flex-direction: column;
      text-align: center;
      .profileImg {
        align-self: center;
        width: 120px;
        height: 140px;
        border-radius: 100%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      h2 {
        font-size: 20px;
      }
    }
    /* personal skill */
    .skill {
      span {
        display: inline-block;
        font-size: 12px;
        padding: 2px;
        margin: 0 5px 5px 0;
        border-radius: 5px;

        &:nth-child(1) {
          background-color: #dd4b39;
        }
        &:nth-child(2) {
          background-color: #00a65a;
        }
        &:nth-child(3) {
          background-color: #00c0ef;
        }
        &:nth-child(4) {
          background-color: #f39c12;
        }
        &:nth-child(5) {
          background-color: #3c8dbc;
        }
      }
    }
  }
}
@media (min-width: 750px) and (max-width: 1080px) {
  .contributorList {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 270px) and (max-width: 750px) {
  .contributorList {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
