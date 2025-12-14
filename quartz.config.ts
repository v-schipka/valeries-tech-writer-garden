import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Valerie's Tech Writer Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
          lightMode: {
              light: "#f8fafc",        // slate-50
              lightgray: "#e2e8f0",    // slate-200
              gray: "#94a3b8",         // slate-400
              darkgray: "#475569",     // slate-600
              dark: "#0f172a",         // slate-900

              secondary: "#0891b2",    // cyan-600 (main accent)
              tertiary: "#67e8f9",     // cyan-300 (soft accent)

              highlight: "#0891b229",  // subtle cyan background
              textHighlight: "#0891b257",
          },

          darkMode: {
              light: "#1f2937",        // slate-800 (matches your body bg)
              lightgray: "#374151",    // slate-700
              gray: "#6b7280",         // slate-500
              darkgray: "#cbd5e1",     // slate-300 (main text)
              dark: "#e5e7eb",         // slate-200

              secondary: "#22d3ee",    // cyan-400 (pops on dark bg)
              tertiary: "#67e8f9",     // cyan-300

              highlight: "#0891b229",
              textHighlight: "#22d3ee57",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
