module.exports = function userHandler(req, res) {
    res.send({
        message: 'Hello ' + req.params.user + '!'
    });
};

module.exports.foo = function foo(req, res) {
    res.send({
        message: 'foo'
    });
};

module.exports.bar = function foo(req, res) {
    res.send({
        message: 'bar'
    });
};