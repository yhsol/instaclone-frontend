# INSTAGRAM CLONE PROJECTS (FRONT-END)

# USE

# PROCESS

- styled-components 의 theme 을 쓰면 에러가 남. (React.Children.only expected to receive a single React element child.)
  -> ThemeProvider 의 child 가 한개여야됨. 그래서 React.Fragment 등으로 감싸면 작동 됨.
