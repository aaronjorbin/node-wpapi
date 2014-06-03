var request = require( 'superagent' );
module.exports = wpQuery;

function wpQuery( options ) {
	this._options = options || {};
	this._filters = {};
	this._supportedMethods = [ 'head', 'get', 'put', 'post', 'patch', 'delete' ];
}

wpQuery.prototype.filter = function( obj ) {
	this._filters = obj;
	return this;
};

wpQuery.prototype._isSupportedMethod = function( method ) {
	if( this._supportedMethods.indexOf( method ) === -1 ) {
		throw new Error( 'Unsupported method; supported methods are: ' + this._supportedMethods.join( ', ' ) );
	}

	return true;
}

wpQuery.prototype.generateRequestUri = function () {
 	return '';
};

wpQuery.prototype.get = function( callback ) {
	this._isSupportedMethod( 'get' );
	var url = this.generateRequestUri();
	callback = ( typeof callback === 'function' ) ? callback : ( function() {} );

	request.get( url ).end( function( result ) {
		callback( result.body );
	} );
};

wpQuery.prototype.post = function( data, callback ) {
	this._isSupportedMethod( 'post' );
	var url = this.generateRequestUri();
	callback = ( typeof callback === 'function' ) ? callback : ( function() {} );
};

wpQuery.prototype.put = function( callback ) {
	this._isSupportedMethod( 'put' );
	var url = this.generateRequestUri();
	callback = ( typeof callback === 'function' ) ? callback : ( function() {} );
};

wpQuery.prototype.patch = function( callback ) {
	this._isSupportedMethod( 'patch' );
	var url = this.generateRequestUri();
	callback = ( typeof callback === 'function' ) ? callback : ( function() {} );
};

wpQuery.prototype.delete = function( callback ) {
	this._isSupportedMethod( 'delete' );
	var url = this.generateRequestUri();
	callback = ( typeof callback === 'function' ) ? callback : ( function() {} );
};

wpQuery.prototype.head = function( callback ) {
	this._isSupportedMethod( 'head' );
	var url = this.generateRequestUri();
	callback = ( typeof callback === 'function' ) ? callback : ( function() {} );
};
