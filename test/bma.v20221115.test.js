
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bma.v20221115.Client({
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-shanghai",
  profile: {
    signMethod: "TC3-HMAC-SHA256",
    httpProfile: {
      reqMethod: "POST",
      reqTimeout: 30,
      endpoint: "cvm.ap-shanghai.tencentcloudapi.com",
    },
  },
})
describe("bma.v20221115.test.js", function () {

it("bma.v20221115.CreateBPFakeAPP", async function () {
    try {
       const data = await client.CreateBPFakeAPP({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20221115.CreateBPFakeURL", async function () {
    try {
       const data = await client.CreateBPFakeURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20221115.CreateBPFakeURLs", async function () {
    try {
       const data = await client.CreateBPFakeURLs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bma.v20221115.CreateBPFakeAPPList", async function () {
    try {
       const data = await client.CreateBPFakeAPPList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
