# git 정리
> 만들면서 배우는 Git+GitHub 입문 - 윤용식 지음 참조

## 0. Git 설치하기
#### VSC(버전 관리 시스템) 종류
  * 클라이언트-서버 모델
    - 중앙 저장소에서 모든 프로젝트 관리 처리
    - 로컬에는 파일의 사본만 남음    
    > Ex ) CVS, SVN    
    > smartSVN, tortoiseSVN 사용
  * 분산 모델
    - 클라이언트 각자 전체 저장소 사본 로컬에 저장
    > Ex ) Git
    
#### Git 설치
  * 터미널로 설치
  ```JavaScript
  sudo installer -pkg /* 파일 경로 혹은 파일 드래그앤드롭 */ -target
  sudo mv /usr/bin/git /usr/bin/git-system /* 혹시모를 더미 파일 정리 */
  /* mv : 터미널 내 파일 및 폴더 이동, 이름 변경하는 커맨드 */
  git config --global user.name "사용자명"
  git config --global user.email "이메일"
  ```
## 1. Git 기본

    
