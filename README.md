#

```
  # delete action

  wsk action delete {ACTION}
  wsk action delete {PACKAGE/ACTION}

  #example

  wsk action delete products/worker
  wsk action delete products/campaign
  wsk action delete products/handleCorsRequest

  wsk action update products/hello hello.js --web true


  # create API

  wsk api create {PATH} {ENDPOINT} {METHOD:POST|GET} {ACTION} --response-type http

  #example

  wsk api create /recommendations /list post products/worker --response-type http
  wsk api create /recommendations /list options products/handleCorsRequest --response-type http



  #example
  wsk api delete /recommendations/list

  wsk action create products/handleCorsRequest ./actions/cors-action.js --web true -a web-custom-options true


  wsk action create products/campaign --web true --kind nodejs:14 campaign.zip
  wsk action create products/worker --web true --kind nodejs:14 worker.zip

  #update

  wsk action update products/campaign --web true --kind nodejs:14 campaign.zip


  wsk api create /recommendations /list post products/worker --response-type http
  wsk api create /recommendations /list options products/handleCorsRequest --response-type http

  wsk action create products/handleCorsRequest ./actions/cors-action.js --web true -a web-custom-options true
  wsk action create products/campaign --web true -a web-custom-options true --kind nodejs:14 campaign.zip
  wsk action create products/worker --web true -a web-custom-options true --kind nodejs:14 worker.zip



  wsk api create /recommendations-uat /list post uat/worker --response-type http
  wsk api create /recommendations-uat /list options uat/handleCorsRequest --response-type http

  wsk action create uat/handleCorsRequest ./actions/cors-action.js --web true -a web-custom-options true
  wsk action create uat/campaign --web true -a web-custom-options true --kind nodejs:14 campaign.zip
  wsk action create uat/worker --web true -a web-custom-options true --kind nodejs:14 worker.zip



  wsk action delete uat/worker
  wsk action delete uat/campaign
  wsk action delete uat/handleCorsRequest


```
