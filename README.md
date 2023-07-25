- dockerイメージの作成  
`$ docker build -t github_actions-practice-react:v1 .`

- Reactプロジェクトの作成(初回のみ実施)  
  (windowsの場合、`$(pwd)`はカレントディレクトリまでのフルパスに置換する。)  
`$ docker run -it -v $(pwd):/gbc github_actions-practice-react:v1 npx create-react-app react-app --template typescript`