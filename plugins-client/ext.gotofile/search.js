/**
 * Code Editor for the Cloud9 IDE
 *
 * @copyright 2010, Ajax.org B.V.
 * @license GPLv3 <http://www.gnu.org/licenses/gpl.txt>
 */
 

define(function(require, exports, module) {
var Searcher = require("./filelist");

this.nodeCache = null;

module.exports = function(nodes, keyword, cache) {
    this.nodeCache = (nodes.length && nodes) || this.nodeCache;
    
    var start = new Date();
    
    var s = new Searcher.exports(this.nodeCache);
    var res = (s.findMatchingFiles(keyword));
    
    //console.log("took", new Date() - start, "matches", res.length);
    
    var results = [];
    for (var rix = 0; rix < res.length; rix++) {
        results.push( "<d:href>" + res[rix] + "</d:href>");
    }
    
    return "<d:multistatus  xmlns:d='DAV:'><d:response>"
        + results.join("") + "</d:response></d:multistatus>";
}

});