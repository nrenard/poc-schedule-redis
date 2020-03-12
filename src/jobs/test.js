import Queue from '../lib/Queue';

Queue.process('email', function({ data, ...job }, done){
  console.log('data: ', data);
  console.log('chegou aqui')

  done();
});

export default Queue;
