<template>
	<div id="about" class="widget widget-white widget-about">
		<div class="container">
			<div class="row">
				<div class="col-sm-offset-1 col-sm-10">
					<h2>atlassian<strong>RMS</strong></h2>
					<p>
						atlassian <strong>Requirements Managment System</strong> 은 전세계에서
						유일한 Jira 를 기반한 요구사항 관리 시스템입니다.
					</p>
					<div class="row features">
						<div
							:key="index"
							v-for="(colData, index) in armsServiceList"
							class="col-sm-4"
						>
							<section class="feature">
								<div class="row">
									<div class="col-xs-4">
										<p>
											<span class="icon" v-bind:class="colData.iconClassName">
												<i v-bind:class="colData.iconImagePath"></i>
											</span>
										</p>
									</div>
									<div class="col-xs-8">
										<h4>{{ colData.title }}</h4>
										<p v-html="colData.subTitle"></p>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
			<p class="preview text-align-center">
				<router-link to="/white" class="btn btn-lg btn-danger"
					>&nbsp; Preview the Demo Version &nbsp;</router-link
				>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	data() {
		return {
			armsServiceList: [
				{
					title: "Scope",
					subTitle: "제품(서비스)의 요구사항이 Jira의 END USER 까지 공유",
					iconClassName: "background-danger",
					iconImagePath: "fa fa-bold",
				},
				{
					title: "Cost",
					subTitle: "제품(서비스)의 Jira 분석<br />&#10132; 정확한 Resource 통계",
					iconClassName: "background-warning",
					iconImagePath: "fa fa-magic",
				},
				{
					title: "Time",
					subTitle:
						"제품(서비스) Jira Project 맵핑<br />&#10132; 실질적인 진척도 측정",
					iconClassName: "background-success",
					iconImagePath: "fa fa-wrench",
				},
				{
					title: "제품(서비스)",
					subTitle:
						"<p>aRMS는 제품과 서비스를 기준 <br />&#10132; 데이터를 구조화 합니다.</p>",
					iconClassName: "background-primary",
					iconImagePath: "fa fa-superscript",
				},
				{
					title: "요구사항",
					subTitle:
						"<p>ARMS는 제품과 서비스를 기준<br />&#10132; 요구사항을 관리합니다.</p>",
					iconClassName: "background-lime",
					iconImagePath: "fa fa-check",
				},
				{
					title: "Test(QA)",
					subTitle:
						"<p>ARMS는 제품과 서비스를 기준<br />&#10132; 요구사항의 테스트를 관리</p>",
					iconClassName: "background-info",
					iconImagePath: "fa fa-css3",
				},
			],
		};
	},
};
</script>

<style scoped>
.col-sm-4:nth-child(-n + 3) {
	margin-bottom: 60px;
}
</style>
