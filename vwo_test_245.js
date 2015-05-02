window._vis_opt_heatmap = window._vis_opt_heatmap || 0;window._vis_opt_settings_loaded = true; window._vwo_acc_id = 24800; window._vwo_exp_ids = window._vwo_exp_ids || []; window._vwo_exp = window._vwo_exp || {}; window._vwo_cookieDomain = 'hariombalhara.in';
_vwo_exp_ids.push('245');
_vwo_exp['245'] = {};
_vwo_exp['245'].name = "Campaign 245";
_vwo_exp['245'].version = 2;
_vwo_exp['245'].clickmap = 1;
_vwo_exp['245'].type = 'VISUAL_AB';
_vwo_exp['245'].status = 'RUNNING';
_vwo_exp['245'].pc_traffic = 100;
_vwo_exp['245'].url = 'http://hariombalhara.in/404.html';
_vwo_exp['245'].urlRegex = "^http\\:\\\/\\\/hariombalhara\\.in\\\/404\\.html\\\/?(?:[\\?#].*)?$";
_vwo_exp['245'].exclude_url = '';
_vwo_exp['245'].multiple_domains = 0;
_vwo_exp['245'].segment_code = 'true';
_vwo_exp['245'].sections = {};
_vwo_exp['245'].sections['1'] = {};
_vwo_exp['245'].sections['1'].name = "";
_vwo_exp['245'].sections['1'].path = "";
_vwo_exp['245'].sections['1'].variations = {};
_vwo_exp['245'].sections['1'].variation_names = {};
_vwo_exp['245'].sections['1'].segment = {};
_vwo_exp['245'].sections['1'].variation_names['1'] = "Control";
_vwo_exp['245'].sections['1'].variations['1'] = "[]";
_vwo_exp['245'].sections['1'].segment['1'] = '1';
_vwo_exp['245'].sections['1'].variation_names['2'] = "Variation-1";
_vwo_exp['245'].sections['1'].variations['2'] = "[]";
_vwo_exp['245'].sections['1'].segment['2'] = '1';
_vwo_exp['245'].combs = {};
_vwo_exp['245'].comb_n = {};
_vwo_exp['245'].combs['1'] = 0.5;
_vwo_exp['245'].comb_n['1'] = "Control";
_vwo_exp['245'].combs['2'] = 0.5;
_vwo_exp['245'].comb_n['2'] = "Variation-1";
_vwo_exp['245'].goals = {};
_vwo_exp['245'].goals['1'] = {};
_vwo_exp['245'].goals['1'].urlRegex = "^http\\:\\\/\\\/twitter\\.com\\\/hariom_balhara\\\/?(?:[\\?#].*)?$";
_vwo_exp['245'].goals['1'].type = 'ON_PAGE';_vwo_exp['245'].third_party = {};

// Additional Code that we need to add

// We basically converted the JS that comes as string to a function that when called will apply that change
function _vwo_applyVar(combinationId) {
	var interval;
	switch(combinationId) {
		case "1":
			break;
		case "2":
			interval = setInterval(function () {
				if (!vwo_$('h1').length) {
					return;
				}
				clearInterval(interval);
				vwo_$('h1').css('color', 'red');
			});
			break;
	}
}

window._vwo_evq = window._vwo_evq || [];
window._vwo_evq.push = function() {
	var eventData = arguments[0];

  // Listen for Combination Chosen event
	if (eventData[0] === 'cC') {
		var expId = eventData[1],
			combinationId = eventData[2];

		console.log('Combination Chosen is ' + combinationId + 'for campaign' + expId);
		_vwo_applyVar(combinationId);
	}
};
