<template>
	<ul id="Drawer-menu" class="dr-menu dr-hidden">
		<img class="dr-logo center" src="../assets/dmyimage/rogo_dmy.png">
		<div class="dr-links">
			<div id="dr-content1" class="dr-container dr-saup opacity-0">
				<router-link id="homeopen" to="/">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-home co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">H</span><span class="co-grey">ome</span></p>
							<p class="dr-fs2 co-grey">ホーム</p>
						</div>
					</div>
				</router-link>
				<router-link id="aboutopen" to="/about">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-file-alt co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">A</span><span class="co-grey">bout</span></p>
							<p class="dr-fs2 co-grey">概要</p>
						</div>
					</div>
				</router-link>
				<router-link id="newsopen" to="/news">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-newspaper co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">N</span><span class="co-grey">ews</span></p>
							<p class="dr-fs2 co-grey">最新情報</p>
						</div>
					</div>
				</router-link>
			</div>
			<div id="dr-content2" class="dr-container dr-saup opacity-0">
				<router-link id="galleryopen" to="/gallery">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-pen-alt co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">G</span><span class="co-grey">allery</span></p>
							<p class="dr-fs2 co-grey">イラスト一覧</p>
						</div>
					</div>
				</router-link>
				<div class="display-flex dr-link">
					<i class="fas fa-question-circle co-brown dr-icon m-right-05rem"></i>
					<div>
						<p class="font-E2 dr-fs1"><span class="co-brown">？</span><span class="co-grey">？？</span></p>
						<p class="dr-fs2 co-grey">Coming soon</p>
					</div>
				</div>
				<div class="display-flex dr-link">
					<i class="fas fa-question-circle co-brown dr-icon m-right-05rem"></i>
					<div>
						<p class="font-E2 dr-fs1"><span class="co-brown">D</span><span class="co-grey">ammy</span></p>
						<p class="dr-fs2 co-grey">dmy</p>
					</div>
				</div>
				<div class="display-flex dr-link">
					<i class="fas fa-question-circle co-brown dr-icon m-right-05rem"></i>
					<div>
						<p class="font-E2 dr-fs1"><span class="co-brown">D</span><span class="co-grey">ammy</span></p>
						<p class="dr-fs2 co-grey">dmy</p>
					</div>
				</div>
			</div>
			<div id="dr-content3" class="dr-line dr-saup opacity-0"></div>
			<div id="dr-content4" class="dr-container dr-saup opacity-0">
				<div class="display-flex dr-link">
					<i class="fab fa-dailymotion co-brown dr-icon m-right-05rem"></i>
					<div>
						<p class="font-E2 dr-fs1"><span class="co-brown">D</span><span class="co-grey">ammy</span></p>
						<p class="dr-fs2 co-grey">dmy</p>
					</div>
				</div>
				<div class="display-flex dr-link">
					<i class="fas fa-external-link-alt co-brown dr-icon m-right-05rem"></i>
					<div>
						<p class="font-E2 dr-fs1"><span class="co-brown">L</span><span class="co-grey">ink</span></p>
						<p class="dr-fs2 co-grey">リンク</p>
					</div>
				</div>
				<div class="display-flex dr-link">
					<i class="fas fa-envelope co-brown dr-icon m-right-05rem"></i>
					<div>
						<p class="font-E2 dr-fs1"><span class="co-brown">C</span><span class="co-grey">ontact</span></p>
						<p class="dr-fs2 co-grey">連絡・お問い合わせ</p>
					</div>
				</div>
			</div> 
		</div>
	</ul>
</template>

<script>
export default {
  name: 'DrawerMenu',
  mounted: function () {
    
  }
}
</script>