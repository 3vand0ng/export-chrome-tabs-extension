# export-chrome-tabs-extension

突发奇想想把 Chrome tabs 导出，然后删掉不需要的 tabs，节约空间

## Example
```json
{
  "meta": {
    "totalTabs": 14,
    "groupCount": 3,
    "groupedTabs": 9,
    "ungroupedTabs": 5
  },
  "groups": {
    "72659831": {
      "info": {
        "title": "(no name)",
        "color": "purple"
      },
      "tabsCount": 3,
      "tabs": [
        {
          "url": "https://example.com/example/hoc-pattern",
          "title": "hoc-pattern"
        },
        {
          "url": "https://example.com/example/split-chunks-issue",
          "title": "split-chunks-issue"
        },
        {
          "url": "https://example.com/example/forms-guide",
          "title": "Vue forms-guide"
        }
      ]
    },
    "691917289": {
      "info": {
        "title": "(no name)",
        "color": "green"
      },
      "tabsCount": 3,
      "tabs": [
        {
          "url": "https://example.com/example/login-api",
          "title": "login-api"
        },
        {
          "url": "https://example.com/example/picker-view",
          "title": "picker-view"
        },
        {
          "url": "https://example.com/example/subscribe-msg",
          "title": "subscribe-msg"
        }
      ]
    },
    "1775183654": {
      "info": {
        "title": "(no name)",
        "color": "red"
      },
      "tabsCount": 3,
      "tabs": [
        {
          "url": "https://example.com/micro-frontend-pros-cons",
          "title": "micro-frontend-pros-cons"
        },
        {
          "url": "https://example.com/example/setup",
          "title": "React Native setup"
        },
        {
          "url": "https://example.com/example/binary-search",
          "title": "binary-search"
        }
      ]
    }
  },
  "ungrouped": [
    {
      "url": "https://example.com/mac-os-tahoe",
      "title": "macOS Tahoe"
    },
    {
      "url": "https://example.com/example/frontend-role",
      "title": "frontend-role"
    },
    {
      "url": "https://example.com/example/getting-started",
      "title": "getting-started"
    },
    {
      "url": "https://example.com/example/utility-types",
      "title": "utility-types"
    },
    {
      "url": "https://example.com/example/hooks-useeffect",
      "title": "hooks-useeffect"
    }
  ]
}
```
