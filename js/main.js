(function($) {

    // Variables
    var $projects = $('.seytonDash'), // projects container
    	$project = $('.seytonDash'), // individual projects
    	$projectImageBefore = CSSRulePlugin.getRule(".mohawk .info:before"), //decoration
    	$projectImageAfter = CSSRulePlugin.getRule(".omega .info:after"), //decoration
    	tlProjects, tlProject;

    tlProject = new TimelineMax({repeat: 0, repeatDelay: 2});
  
  var $projectTitleMobile = $project.find('.logo p'),
			$mohawkInfoMobile = $project.find('.mohawkMobile .infoMobile'),
			$omegaInfoMobile = $project.find('.omegaMobile .infoMobile'),
			$mohawkNOmegaMobile = $project.find('.brothers2 img'),
			$projectImageMobile = $project.find('.logo img');
  
  
  tlProject
    .set([$projectTitleMobile, $mohawkInfoMobile, $omegaInfoMobile, $mohawkNOmegaMobile, $projectImageMobile], {autoAlpha: 0})
    .fromTo($mohawkNOmegaMobile, 1.3, {autoAlpha: 0, xPercent: '200'}, {autoAlpha: 1, xPercent: '0', ease:Power4.easeInOut})
    .add('omegaIn')
    .fromTo($mohawkInfoMobile, 0.7, {autoAlpha: 0}, {autoAlpha: 1, x: '0', ease:Power4.easeInOut}, '-=0.4')
    .add('mohawkInfoIn')
    .fromTo($omegaInfoMobile, 0.7, {autoAlpha: 0}, {autoAlpha: 1, x: '0', ease:Power4.easeInOut}, '-=0.4')
    .add('omegaInfoIn');
    
    tlProject = new TimelineMax({repeat: 0, repeatDelay: 2});

    var $projectTitle = $project.find('.logo p'),
    		$mohawkInfo = $project.find('.mohawk .info'),
    		$omegaInfo = $project.find('.omega .info'),
    		$mohawk = $project.find('.mohawk'),
    		$omega = $project.find('.omega'),
        $projectImage = $project.find('.logo img');

    // Create a project timeline
    tlProject
    	.set([$projectTitle, $mohawkInfo, $omegaInfo, $omega, $mohawk, $projectImage], {autoAlpha: 0})
    	.fromTo($omega, 0.7, {autoAlpha: 0, xPercent: '200'}, {autoAlpha: 1, xPercent: '0', ease:Power4.easeInOut})
      .add('omegaIn')
    	.fromTo($mohawk, 0.7, {autoAlpha: 0, xPercent: '-200'}, {autoAlpha: 1, xPercent: '0', ease:Power4.easeInOut})
    	.add('mohawkIn')
    	.fromTo($projectImage, 0.7, {autoAlpha: 0, yPercent: '-50'}, {autoAlpha: 1, yPercent: '-5', ease:Power4.easeInOut}, '-=0.4')
			.add('projectImageIn')
    	.fromTo($projectTitle, 0.7, {autoAlpha: 0, xPercent: '-50'}, {autoAlpha: 1, xPercent: '-2', ease:Power4.easeInOut}, '-=0.4')
    	.add('titleIn')
      .fromTo($mohawkInfo, 0.7, {autoAlpha: 0}, {autoAlpha: 1, x: '0', ease:Power4.easeInOut}, '-=0.4')
      .add('mohawkInfoIn')
      .fromTo($omegaInfo, 0.7, {autoAlpha: 0}, {autoAlpha: 1, x: '0', ease:Power4.easeInOut}, '-=0.4')
      .add('omegaInfoIn')
    	.to($projectImage, 4.3, {yPercent: '+=5', ease:Linear.easeNone}, 'titleIn-=0.1')
    	.to($projectTitle, 4.3, {xPercent: '+=2', ease:Linear.easeNone}, 'titleIn-=0.1')
      // .fromTo($projectTitle, 0.7, {autoAlpha: 0, xPercent: '-50'}, {autoAlpha: 1, xPercent: '-2', ease:Power4.easeInOut}, '-=0.4')
    	// .add('titleOut')
    	.to($projectImage, 5, {xPercent: '0', ease:Linear.easeNone}, 'imageIn')
    	.add('imageOut')
    	// .to([$projectTitle, $projectSubtitle], 0.5, {autoAlpha: 0, xPercent: '+=10', ease:Power4.easeInOut}, 'titleOut')
    	// .to($projectImage, 0.4, {autoAlpha: 0, xPercent: '+=80', ease:Power4.easeInOut}, 'imageOut');

})(jQuery);










