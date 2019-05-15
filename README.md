# INSTAGRAM CLONE PROJECTS (FRONT-END)

# USE

- input type 속성

  - input 에서 password, email 등의 type 을 지정.

- connect server

  - cd.. (outside of directory)
  - cd "server directory"
  - yarn dev

- svg 이미지 사이즈 등 특정 속성 활용 방법 (Icons.js 확인)

# PROCESS

- styled-components 의 theme 을 쓰면 에러가 남. (React.Children.only expected to receive a single React element child.)
  -> ThemeProvider 의 child 가 한개여야됨. 그래서 React.Fragment 등으로 감싸면 작동 됨.
