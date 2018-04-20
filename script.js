$(function(){
	function myRequest(url, tipoRequest) {
		return new Promise((resolve) => {
			var rawData, data;
			var request = new XMLHttpRequest();
			request.open('GET', url, true);
			request.onload = function() {
				if (this.status >= 200 && this.status < 400) {
					rawData = this.response;
					data = JSON.parse(this.response);
					resolve(data);
				}
			}
			request.send();
		})
	}
	
	function misLlamadas() {
		var channel1 = 'castro_1021';
		var channel2 = 'monstercat';
		var channel = channel2;
		var clientId = 'c8a3wkkb56yqjhlcui7tcfyjvs65dy6';
		var url = 'https://api.twitch.tv/kraken/streams/' + channel + '?client_id=' + clientId;
		var tipoRequest = '';

		myRequest(url, tipoRequest).then((data) => {
			console.log(data);
		});
	} 
	misLlamadas();
});
