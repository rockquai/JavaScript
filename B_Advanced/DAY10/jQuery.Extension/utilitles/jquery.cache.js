(function(global, $) {
	'use strict';

	/**
	 * --------------------------------
	 * jQuery 인스턴스 캐시 : 1회만 생성
	 * --------------------------------
	 */
	
	// 비공개
	var cache = function(dom_el) {
		/**
		 * --------------------------------------------
		 * [검증] dom_el --> dom element여야 한다 
		 * --------------------------------------------
		 */
		if ( dom_el.nodeType !== 1 ) {
			throw new Error('문서객체여야 합니다');
		}

		/**
		 * -----------------------------------------------
		 * 메모리 대상
		 * jQuery() 팩토리 함수를 사용(1회)한 결과를 저장 
		 * -----------------------------------------------
		 * jQuery.data() 유틸리티 메소드 활용
		 * <설정할 때> jQuery.data(dom_el, key, value)
		 * <가져올 때> jQuery.data(dom_el, key)
		 * -----------------------------------------------
		 */
		var $this = $.data(dom_el, '$this');
		console.log('$this', $this); // 한번은 undefined 되고 다시 클릭하면 [a].
		return $this ? $this : $.data(dom_el, '$this', $(dom_el));
	};

	if( !$.cache ) {
		// 유틸리티 메소드 정의
		$.cache = cache;
		// 별칭 -> Alias
		$.$ = $.cache;
	}
})(this, this.jQuery);