document.getElementById('export').addEventListener('click', async () => {
  try {
    const windows = await chrome.windows.getAll({ populate: true });
    
    let allTabs = [];
    for (const win of windows) {
      for (const tab of win.tabs) {
        if (tab.url && !tab.url.startsWith('chrome://') && !tab.url.startsWith('edge://')) {
          allTabs.push({
            url: tab.url,
            title: tab.title || '(no title)',
            groupId: tab.groupId
          });
        }
      }
    }

    const grouped = {};
    for (const tab of allTabs) {
      const isUngrouped = tab.groupId === undefined || tab.groupId === -1;
      const key = isUngrouped ? 'null' : String(tab.groupId);
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push({
        url: tab.url,
        title: tab.title
      });
    }

    const groupDetails = {};
    try {
      const groups = await chrome.tabGroups.query({});
      for (const g of groups) {
        groupDetails[String(g.id)] = {
          title: g.title || '(no name)',
          color: g.color
        };
      }
    } catch (error) {
      console.warn('Failed to get tab group details:', error);
    }

    // 构建最终输出对象
    const output = {
      meta: {
        totalTabs: allTabs.length,
        groupedTabs: allTabs.filter(t => !(t.groupId === undefined || t.groupId === -1)).length,
        ungroupedTabs: grouped['null'] ? grouped['null'].length : 0,
        groupCount: Object.keys(grouped).filter(k => k !== 'null').length
      },
      groups: {},
      ungrouped: grouped['null'] || []
    };

    for (const gid of Object.keys(grouped)) {
      if (gid === 'null') continue;
      const tabsList = grouped[gid];
      output.groups[gid] = {
        info: groupDetails[gid] || { title: '(no name)', color: 'grey' },
        count: tabsList.length,
        tabs: tabsList
      };
    }

    const jsonStr = JSON.stringify(output, null, 2);
    await navigator.clipboard.writeText(jsonStr);

    document.getElementById('status').textContent = 
      `✅ Copied! ${allTabs.length} tabs, ${output.meta.groupCount} groups.`;

  } catch (error) {
    console.error('Failed to export tabs:', error);
    document.getElementById('status').textContent = '❌ Error: ' + (error.message || error);
  }
});

