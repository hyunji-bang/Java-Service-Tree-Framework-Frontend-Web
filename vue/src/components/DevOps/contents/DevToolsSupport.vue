<template>
  <div class="conainer">
    <ContentHeader subTitle="jsTree Service Framework <sup>TSF</sup> Dev Tools" />
    <div class="content-section">
      <div class="dev-tools" v-for="(list, idx) in devToolsList" :key="idx">
        <h3 class="tool-title">{{ list.toolTitle }}</h3>
        <div class="tools-box">
          <a
            v-for="(toolInfo, infoIdx) in list.toolsList"
            :key="infoIdx"
            :href="toolInfo.toolLink"
            class="tools"
            :class="toolInfo.longName && toolInfo.longName"
          >
            <span>
              <img
                :src="toolInfo.toolImgpath"
                :alt="toolInfo.toolName"
                class="tool-img"
              />
              <p class="tool-name">{{ toolInfo.toolName }}</p>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
toolInfo
<script>
import ContentHeader from '@/components/DevOps/common/ContentHeader.vue';

export default {
  name: 'DevTools',
  components: {
    ContentHeader,
  },
  data() {
    return {
      devToolsList: [
        {
          toolTitle: 'Application Lifecycle Management',
          toolsList: [
            {
              toolName: 'Jira',
              toolImgpath: require('../../../assets/images/devops/DevSupport/jira.png'),
              toolLink: 'http://www.313.co.kr/jira',
            },
            {
              toolName: 'Confluence',
              toolImgpath: require('../../../assets/images/devops/DevSupport/confluence.png'),
              toolLink: 'http://www.313.co.kr/confluence',
            },
            {
              toolName: 'Fecru',
              toolImgpath: require('../../../assets/images/devops/DevSupport/fecru.png'),
              toolLink: 'http://www.313.co.kr/fecru',
            },
            {
              toolName: 'Maven',
              toolImgpath: require('../../../assets/images/devops/DevSupport/maven.png'),
              toolLink: 'http://www.313.co.kr/313devgrp/analysis',
            },
            {
              toolName: 'Swagger',
              toolImgpath: require('../../../assets/images/devops/DevSupport/swagger.png'),
              toolLink: 'http://www.313.co.kr/swagger-ui.html',
            },
            {
              toolName: 'Zipkin',
              toolImgpath: require('../../../assets/images/devops/DevSupport/zipkin.png'),
              toolLink: 'http://www.313.co.kr/zipkin',
            },
          ],
        },
        {
          toolTitle: 'CI / CD',
          toolsList: [
            {
              toolName: 'Bamboo',
              toolImgpath: require('../../../assets/images/devops/DevSupport/bamboo.png'),
              toolLink: 'http://www.313.co.kr/bamboo',
            },
            {
              toolName: 'Jenkins',
              toolImgpath: require('../../../assets/images/devops/DevSupport/jenkins.png'),
              toolLink: 'http://www.313.co.kr/jenkins',
            },
            {
              toolName: 'Spinnaker',
              toolImgpath: require('../../../assets/images/devops/DevSupport/spinnaker.png'),
              toolLink: 'http://www.313.co.kr:9000',
            },
            {
              toolName: 'Github',
              toolImgpath: require('../../../assets/images/devops/DevSupport/github.png'),
              toolLink: 'https://github.com/313devgrp',
            },
            {
              toolName: 'Nexus',
              toolImgpath: require('../../../assets/images/devops/DevSupport/nexus.png'),
              toolLink: 'http://www.313.co.kr/nexus',
            },
            {
              toolName: 'SonarQube',
              toolImgpath: require('../../../assets/images/devops/DevSupport/sonar.png'),
              toolLink: 'http://www.313.co.kr/sonar',
            },
          ],
        },
        {
          toolTitle: 'Database System',
          toolsList: [
            {
              toolName: 'Oracle',
              toolImgpath: require('../../../assets/images/devops/DevSupport/oracle.png'),
              toolLink: 'https://www.313.co.kr:1158/em',
            },
            {
              toolName: 'Mysql',
              toolImgpath: require('../../../assets/images/devops/DevSupport/mysql.png'),
              toolLink: 'http://www.313.co.kr:8880/phpMyAdmin-4.8.3/',
            },
            {
              toolName: 'Postgres',
              toolImgpath: require('../../../assets/images/devops/DevSupport/postgres.png'),
              toolLink: 'http://www.313.co.kr:8880/phpPgAdmin-5.1/',
            },
            {
              toolName: 'Minio',
              toolImgpath: require('../../../assets/images/devops/DevSupport/minio.png'),
              toolLink: 'http://www.313.co.kr:62222',
            },
            {
              toolName: 'Redis',
              toolImgpath: require('../../../assets/images/devops/DevSupport/redis.png'),
              toolLink: 'http://www.313.co.kr:8786',
            },
          ],
        },
        {
          toolTitle: 'Application System',
          toolsList: [
            {
              longName: 'longName',
              toolName: 'Nas Server, Ldap Server',
              toolImgpath: require('../../../assets/images/devops/DevSupport/nasServer.png'),
              toolLink: 'http://www.313.co.kr/nas',
            },
            {
              toolName: 'Mail server',
              toolImgpath: require('../../../assets/images/devops/DevSupport/mailServer.png'),
              toolLink: 'http://www.313.co.kr/mail',
            },
          ],
        },
        {
          toolTitle: 'BigData System',
          toolsList: [
            {
              longName: 'longName',
              toolName: 'Elastic Search Index Info',
              toolImgpath: require('../../../assets/images/devops/DevSupport/elasticsearchIndex.png'),
              toolLink: 'http://www.313.co.kr/elasticsearch/_cat/indices',
            },
            {
              toolName: 'Kibana',
              toolImgpath: require('../../../assets/images/devops/DevSupport/kibana.png'),
              toolLink: 'http://www.313.co.kr:5601',
            },
            {
              longName: 'longName',
              toolName: 'Elastic Search Nodes Info',
              toolImgpath: require('../../../assets/images/devops/DevSupport/elasticsearchNode.png'),
              toolLink: 'http://www.313.co.kr/elasticsearch/_nodes?pretty=true',
            },
            {
              toolName: 'LogStash',
              toolImgpath: require('../../../assets/images/devops/DevSupport/logstash.png'),
              toolLink: 'http://www.313.co.kr/logstash/_node/stats?pretty',
            },
          ],
        },
        {
          toolTitle: 'Operation System',
          toolsList: [
            {
              toolName: 'Webalizer',
              toolImgpath: require('../../../assets/images/devops/DevSupport/webalizer.png'),
              toolLink: 'http://www.313.co.kr/webalizer/',
            },
            {
              longName: 'longName',
              toolName: 'PRTG Network Monitor',
              toolImgpath: require('../../../assets/images/devops/DevSupport/prtg.png'),
              toolLink: 'http://www.313.co.kr:8085',
            },
          ],
        },
        {
          toolTitle: 'Virtual Machine',
          toolsList: [
            {
              toolName: 'DockerHub',
              toolImgpath: require('../../../assets/images/devops/DevSupport/dockerhub.png'),
              toolLink: 'https://hub.docker.com/u/313devgrp',
            },
            {
              longName: 'longName',
              toolName: 'APACHE GUACAMOLE',
              toolImgpath: require('../../../assets/images/devops/DevSupport/apacheguacamole.png'),
              toolLink: 'http://www.313.co.kr/guacamole',
            },
          ],
        },
        {
          toolTitle: 'Monitoring',
          toolsList: [
            {
              toolName: 'Grafana',
              toolImgpath: require('../../../assets/images/devops/DevSupport/grafana.png'),
              toolLink: 'http://www.313.co.kr:3000',
            },
            {
              toolName: 'ElasticHQ',
              toolImgpath: require('../../../assets/images/devops/DevSupport/elastichq.png'),
              toolLink: 'http://www.313.co.kr:5050/',
            },
            {
              toolName: 'Portainer',
              toolImgpath: require('../../../assets/images/devops/DevSupport/portainer.png'),
              toolLink: 'http://www.313.co.kr:9009/',
            },
          ],
        },
        {
          toolTitle: 'Authn & Authz',
          toolsList: [
            {
              toolName: 'KeyCloak',
              toolImgpath: require('../../../assets/images/devops/DevSupport/keycloak.png'),
              toolLink: 'http://www.313.co.kr/auth',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 50px;
  .dev-tools {
    place-self: center;
    position: relative;
    padding-bottom: 30px;
    width: 300px;
    height: 300px;
    .tool-title {
      display: inline-block;
      margin-bottom: 30px;
      position: relative;
      color: #b5deff;
      &::after {
        content: '';
        position: absolute;
        top: -10px;
        left: 0;
        display: block;
        width: 50px;
        height: 2px;
        background-color: #506d84;
      }
    }
    .tools-box {
      text-align: center;
      .tools {
        width: 80px;
        height: 80px;
        display: inline-block;
        padding: 10px;
        margin: 0 10px 10px 0;
        border-radius: 10px;
        background-color: rgb(221, 221, 221);
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.301);
        &.longName {
          width: 200px;
        }
        span {
          display: flex;
          flex-direction: column;
          place-content: center;
          align-items: center;
          justify-content: space-between;
          .tool-img {
            width: 35px;
            height: 35px;
            margin-bottom: 5px;
          }
          .tool-name {
            color: rgb(51, 51, 51);
            font-size: 13px;
            font-weight: 600;
            white-space: nowrap;
          }
        }
      }
    }
  }
}

@media (min-width: 580px) and (max-width: 1199px) {
  .content-section {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 375px) and (max-width: 579px) {
  .content-section {
    grid-template-columns: repeat(1, 1fr);
    .dev-tools {
      height: auto;
    }
  }
}
</style>
