var PROTO_PATH = __dirname + '/hello.proto';
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;
function sayHello(call, callback) {
  callback(null, {message: 'Hello ' + call.request.name});
}
function main() {
  const port = 3000
  const ip = '10.1.30.106'
  var server = new grpc.Server();
  server.addService(hello_proto.Greeter.service, {sayHello: sayHello});
  server.bind(`${ip}:${port}`, grpc.ServerCredentials.createInsecure());
  server.start();
}
main();