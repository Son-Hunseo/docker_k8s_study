import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

await connectToDatabase();

app.listen(3000);

// 3000번 포트에서 실행
// 도커 없이 실행하려면 최신 버전의 NodeJS를 설치하고 npm install(package.json 기반으로 종속성 설치)한 다음
// 터미널에서 node app.mjs 명령어를 실행해야한다.

// 하지만 우리는 이 코드를 컨테이너에서 실행하려고 한다.
// 컨테이너는 항상 이미지 기반이기 때문에 이를 위해 먼저 이미지를 생성해야한다.
// 이미지를 생성하기위해 Dockerfile 생성