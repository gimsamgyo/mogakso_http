# 1주차 스터디 After

## 진도

HTTP 완벽 가이드 CH01 ~ 03

## 진행

박상혁 학우가 발표
이후 질의 응답

## 질문 내용

### MIME type

Q 1-1. MIME type을 별도로 명시하지 않으면 어떻게 되는가?

A. MIME type이 없거나 클라이언트가 타입이 잘못 설정됐다고 판단한 경우, 브라우저는 MIME 스니핑을 시도하여 MIME type을 추측한다. 하지만 각 브라우저마다 동작 방식이 다르기에 이를 방지하려면 서버 측에서는 `Content-type` 중 `X-Content-Type-Options`를 설정할 수 있다.

Refer

- https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types#%EC%A0%95%ED%99%95%ED%95%9C_mime_%ED%83%80%EC%9E%85_%EC%84%A4%EC%A0%95%EC%9D%98_%EC%A4%91%EC%9A%94%EC%84%B1
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Configuring_server_MIME_types#how_to_check_the_mime_type_of_received_content

---

Q 1-2. 서버 측에서는 MIME type을 어떻게 처리하는가?

A. 대부분의 웹서버는 `application/octet-stream` Mime type을 사용해 알려지지 않은 타입의 리소스를 전송한다. 해당 type의 경우 브라우저 측에서 기본 동작 설정을 허용하지 않고, 해당 리소스를 사용하기 위해서는 디스크에 저장을 해야한다.

Refer

- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Configuring_server_MIME_types

---

Q2. PATCH와 PUT의 차이?

A. PUT은 새로운 리소스를 생성하거나, 대상 리소스를 나타내는 데이터를 대체한다. 즉, 생성과 수정 기능이 모두 가능하다는 듯이다. 이 때, 문서 전체의 완전한 교체만을 허용하기 때문에 멱등성을 가진다.

반면 PATCH의 경우 멱등성을 가지지 않는다. 때문에 side effect를 일으킬 수 있다. 즉, 부분만 변경이 가능하다는 뜻이다.

ex) { id1=1, name="A", age=1 }라는 데이터가 있다는 상황 전제

PUT(id=0, name="B", age=0) / PATCH(id=0, name="B", age=0)
-> 둘 다 { id=0, name="B", age=0 }

PUT(id=0, name="B") / PATCH(id=0, name="B")
-> { id=0, name="B", age=null } / { id=0, name="B", age=1 }

Refer

- https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/PUT
- https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/PATCH

---

Q3. 103 error는 좀 특이한데 찾아보면 좋을 것 같아요.

A. 103 error는 오직 chrome에서만 나타나는 status code이다. 이는 chrome이 실행하는 도중 실패하거나 충돌할 떄 발생한다. 코드가 손상되었다는 의미가 아니라 런타임 중 작동하지 않았음을 의미한다.

Refer

- https://developer.mozilla.org/en-US/docs/web/http/status/103
- https://www.errorvault.com/ko/troubleshooting/runtime-errors/google-inc/google-chrome/error-103_chrome-error-code-103
