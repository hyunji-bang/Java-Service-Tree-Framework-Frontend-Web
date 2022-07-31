<template>
  <div class="conainer">
    <ContentHeader subTitle="jsTree Service Framework<sup>TSF</sup> License" />
    <div class="content-section">
      <div class="title-box">
        <h1 class="page-title">The MIT License</h1>
        <h2 class="sub-title">SPDX short identifier: MIT</h2>
      </div>
      <button type="button" class="btn btn-white" @click="licenseAlert">
        Further resources on the <strong>MIT License</strong>
      </button>
      <p id="demo"></p>
      <div id="block-system-main" class="block block-system">
        <p class="copyright">Copyright &lt;2010&gt; &lt;313 DEV GRP&gt;</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining a copy of
          this software and associated documentation files (the "Software"), to deal in
          the Software without restriction, including without limitation the rights to
          use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
          the Software, and to permit persons to whom the Software is furnished to do so,
          subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
          FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
          COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
          IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
          CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import ContentHeader from '@/components/DevOps/common/ContentHeader.vue';

export default {
  name: 'JSTFLicense',
  components: {
    ContentHeader,
  },
  methods: {
    licenseAlert() {
      const confirmAlert = confirm(
        'Disclaimer: While the OSI acknowledges these as potentially helpful resources for the community, it does not endorse any content, contributors or license interpretations from these websites. Any links to these resources across opensource.org are solely for navigational purposes. The OSI does not promote or exclusively favor any of the mentioned resources, but instead provides them as separate third-party resource to help inform your opinion. Any content from or links to these resources are separate from the OSI, exist for purely informational purposes and creates no attorney-client relationship between you, the OSI or the resources. If you have questions about how licenses apply to you or your organization, you should seek legal advice. ',
      );
      if (confirmAlert) {
        document.querySelector('#demo').innerHTML =
          '<br><p>The following are other community resources that may be helpful:<br><br><a  href=https://tldrlegal.com/license/mit-license style="font-weight: bold;  color: #3c8dbc">The MIT License on TLDRLegal<br><a style="color: #3c8dbc" href=http://www.gnu.org/licenses/license-list.en.html>GNU License List<br><a style="color: #3c8dbc" href=https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licenses>Wikipedia License List<br><a style="color: #3c8dbc" href=http://oss-watch.ac.uk/apps/licdiff/>OSSWatch License Diff<br><a style="color: #3c8dbc" href=https://choosealicense.com>Choosealicense';
      } else {
        document.querySelector('#demo').innerHTML = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  .title-box {
    margin-bottom: 30px;
    .page-title {
      font-size: 36px;
      margin: 20px 0 10px 0;
    }
  }
  .btn {
    color: #fff;
    align-self: end;
    margin-right: 10px;
  }
  #demo {
    text-align: right;
  }
  #block-system-main {
    margin-top: 30px;
  }
}
</style>
