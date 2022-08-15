# Homepage Jan Steinfeld
Dies ist das Repo für meine Homepage. Die Homepage wurde mit [Hugo](https://github.com/gohugoio/hugo) und dem [Hugo Academic Theme](https://github.com/wowchemy/starter-hugo-academic) erstellt.

<!-- [![Screenshot](./preview.png)](https://wowchemy.com/hugo-themes/) -->

<p align="center"><a href="https://github.com/jansteinfeld"  width="25" target="_blank" rel="noopener"><img src="./images/avatar_1563864047688.png" alt="Jan Steinfeld"></a></p>

<!--START_SECTION:Seiten-->
## Link zu weiteren Seiten

- [tmt Package](https://jansteinfeld.github.io/tmt/)
- [PP Package](https://jansteinfeld.github.io/PP/)
- [Sammlung von Wohnungen](https://jansteinfeld.github.io/GeWo/)
<!--END_SECTION:Seiten-->

Some commands:
Error: from config: failed to resolve output format "headers" from site config

config/_default/config.yamlを開き、outputsの項目を[RSS, JSON, WebAppManifest]に（一時的に）書き換える
outputs:
  home: []

その後、hugo コマンドから go modules を更新する
$ hugo mod clean
$ hugo mod get -u
$ hugo mod tidy

outputs:
  home: [HTML, RSS, JSON, WebAppManifest, headers, redirects]


$ hugo mod clean
Error: from config: failed to resolve output format "headers" from site config

hugo server

Ein paar Dinge, die noch umgesetzt werden sollten:
- Titelseite anpassen
- Literaturverzeichnis
- Links zu github?
- weitere Projekte?
- 
