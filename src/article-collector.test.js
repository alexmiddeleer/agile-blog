jest.mock("fs");
const {
  processArticle,
  collectArticles,
  storeArticleHtmlFile,
  loadTemplate,
  loadArticle,
  templateAllArticles,
  loadArticleMeta
} = require("./article-collector");
const fs = require("fs");

beforeEach(() => jest.clearAllMocks());

describe("collectArticles", () => {
  test("it finds all of the files in the specified directory", function() {
    fs.readdirSync.mockReturnValue(["foo.md"]);
    const result = collectArticles("src");
    expect(result).toEqual(["foo.md"]);
  });
});

describe("loadArticle", () => {
  test("it loads the file", function() {
    fs.readFileSync.mockReturnValue("hello world");
    const result = loadArticle("src");
    expect(result).toEqual("hello world");
  });
});

describe("loadTemplate", () => {
  test("it loads the specified template given a path", function() {
    fs.readFileSync.mockReturnValue("template");
    const result = loadTemplate("src");
    expect(result).toEqual("template");
  });
});

describe("storeArticleHtmlFile", () => {
  test("it write the string to the specified location", function() {
    storeArticleHtmlFile("article.html", "my article");
    expect(fs.writeFileSync.mock.calls[0][0]).toEqual("article.html");
    expect(fs.writeFileSync.mock.calls[0][1]).toEqual("my article");
  });
});

describe("processArticle", () => {
  test("it converts the article to html and makes a page", function() {
    const result = processArticle("foo", "a{{{article}}}a");
    const expected = "a<p>foo</p>a";
    expect(result).toEqual(expected);
  });

  test("it includes metadata", function() {
    const meta = { title: "bar" };
    const result = processArticle("foo", "a{{{title}}}a{{{article}}}a", meta);
    const expected = "abara<p>foo</p>a";
    expect(result).toEqual(expected);
  });

  test("metadata cant clobber article", function() {
    const meta = { article: "bar" };
    const result = processArticle("foo", "a{{{article}}}a", meta);
    const expected = "a<p>foo</p>a";
    expect(result).toEqual(expected);
  });
});

describe("templateAllArticles", () => {
  const articlesPath = "articleDrafts";
  const targetPath = "posts";
  const templatePath = "templates/article-template.html";
  test(`it loads all articles and the article template, processes the
      and stores the templated html files in the
      desired folder`, function() {
    fs.readdirSync.mockReturnValue(["foo.md"]);
    fs.readFileSync.mockReturnValueOnce("x{{{article}}}x");
    fs.readFileSync.mockReturnValueOnce("article");
    templateAllArticles(articlesPath, templatePath, targetPath);
    expect(fs.readdirSync.mock.calls[0][0]).toEqual("articleDrafts");
    expect(fs.readFileSync.mock.calls[0][0]).toEqual(
      "templates/article-template.html"
    );
    expect(fs.readFileSync.mock.calls[1][0]).toEqual(`${articlesPath}/foo.md`);
    expect(fs.writeFileSync.mock.calls[0][0]).toEqual("posts/foo.html");
    expect(fs.writeFileSync.mock.calls[0][1]).toEqual("x<p>article</p>x");
  });

  test(`it handles multiple articles`, function() {
    fs.readdirSync.mockReturnValue(["foo.md", "bar.md"]);
    fs.readFileSync.mockReturnValueOnce("x{{{article}}}x");
    fs.readFileSync.mockReturnValueOnce("foofoo");
    fs.readFileSync.mockReturnValueOnce("barbar");
    templateAllArticles(articlesPath, templatePath, targetPath);
    expect(fs.writeFileSync.mock.calls[0][0]).toEqual("posts/foo.html");
    expect(fs.writeFileSync.mock.calls[0][1]).toEqual("x<p>foofoo</p>x");
    expect(fs.writeFileSync.mock.calls[1][0]).toEqual("posts/bar.html");
    expect(fs.writeFileSync.mock.calls[1][1]).toEqual("x<p>barbar</p>x");
  });
});

describe("loadArticleMeta", () => {
  test("it acquires sidebar data", function() {
    const expected = { date: "foo", title: "bar" };
    const result = loadArticleMeta(0, [expected]);
    expect(result).toEqual(expected);
  });
});
