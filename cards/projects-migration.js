// 全局數組 - 不要修改這行
window.PortfolioCards = window.PortfolioCards || [];

// ==============================================
// 完整功能範例卡片
// ==============================================

window.PortfolioCards.push({
    // 必填：類別 - 決定卡片出現在哪個區域
    category: 'projects', // 選項：'projects', 'papers', 'dataViz', 'personal'
    
    // 必填：卡片資料
    data: {
        // === 必填欄位 ===
        id: 'wp-migration',    // 必填：唯一識別符
        title: "Family Structure and Young Adult's Migration Decision",                // 必填：卡片標題
        
        // === 卡片外觀選項 ===
        description: 'Young adults from two-parent households are 12% more likely to stay in their hometown, driven by stronger emotional attachment rather than economic factors—a finding that suggests family stability may paradoxically limit geographic mobility and economic opportunity.',
        date: 'March 2023',                        // 選填：日期標籤
        status: 'Working Paper',                     // 選填：狀態 ('Completed', 'Under Review', 'Planning')
        tags: ['Structural Modeling', 'Discrete Choice', 'Panel Data'],    // 選填：標籤陣列
        // image_url: 'https://via.placeholder.com/320x200/667eea/ffffff?text=Template+Demo', // 選填：卡片圖片URL
        
        // === Modal 內容配置 ===
        modal: {
            subtitle: 'Family structure and the geography of opportunity',  // 選填：modal副標題
            
            // 必填（如果有modal）：標籤頁陣列
            tabs: [
                // --- 文字內容標籤 ---
                {
                    id: 'overview',
                    title: 'Overview',
                    content: {
                        type: 'html', // text, html, markdown, code, link, github, iframe
                        html: `
                        <div class="research-summary">
                        <h3>Background</h3>
                        <p>Americans aren't moving like they used to. Internal migration has steadily declined since the 1980s—a troubling shift that traps workers in struggling regions while booming cities face labor shortages. The numbers are striking: nearly 70% of young adults now live in the same place where they grew up, despite this being the life stage when people traditionally chase opportunities across the country. While numerous explanations exist, estimates consistently suggest staggeringly high migration costs—often requiring a 100% wage increase to justify a move. The image from <em>Home Alone</em> of family members flying in from across the country for Christmas or Thanksgiving is becoming less accurate each year; increasingly, families never scattered in the first place. This paper explores the non-economic forces behind this geographic stickiness.</p>
                        
                        <h3>Research Questions</h3>
                        <ul>
                            <li>Does childhood family structure determine geographic futures? Specifically, are young adults from two-parent households more likely to stay put?</li>
                            <li>What's the price tag on staying home? How does family structure affect the economic trade-offs of migration?</li>
                        </ul>
                        
                        <h3>Motivation</h3>
                        <p>Behind these questions lies a puzzle: why do people pass up substantially higher wages elsewhere? While researchers typically focus on job markets and moving costs, family ties might be the hidden force anchoring people to hometowns—through everything from childcare help to parental connections.</p>
                    </div>`
                    }
                },
                {
                    id: 'methodology',
                    title: 'Methodology',
                    content: {
                        type: 'html', // text, html, markdown, code, link, github, iframe
                        html: `
                        <div class="research-methodology">
                        <h3>Data</h3>
                        <p>I track ~9,000 teenagers through their transition to adulthood using the National Longitudinal Survey of Youth (NLSY97), capturing the critical window from ages 17 to 30—traditionally when Americans scatter for college, careers, and new beginnings. This rich panel data uniquely documents both origins and destinations, along with detailed family backgrounds.</p>
                        
                        <h3>Methods</h3>
                        <ul>
                            <li><strong>Identifying patterns:</strong> Fixed effects models strip away confounding factors to isolate a clean relationship: how does growing up in a two-parent household shape migration decisions? This approach essentially compares otherwise similar young adults who differ only in childhood family structure.</li>
                            
                            <li><strong>Understanding mechanisms:</strong> A structural model that frames migration as an economic decision with a psychological twist. The model disentangles three competing forces:
                                <ul>
                                    <li>The "home premium"—quantifying how much salary people sacrifice to remain near family</li>
                                    <li>Migration costs—capturing both moving expenses and the emotional toll of leaving</li>
                                    <li>Earning differentials—the actual wage gains available elsewhere, estimated from external data</li>
                                </ul>
                            </li>
                        </ul>
                        
                        <h3>The Innovation</h3>
                        <p>My approach recognizes that "home" isn't just another location—it's unique. By creating a distinct "home" option (staying put or returning), and estimating all parameters separately by family structure, I can test whether two-parent families create stronger geographic anchors. Are these anchors forged through emotional bonds, economic advantages, or both? The model provides the first empirical answer.</p>
                    </div>`
                    }
                },
                {
                    id: 'results',
                    title: 'Results',
                    content: {
                        type: 'html', // text, html, markdown, code, link, github, iframe
                        html: `
                        <div class="research-results">
                        <h3>Results</h3>
                        
                        <p><strong>The stickiness gap:</strong> Young adults from two-parent households are 3.9 percentage points less likely to leave their hometown commuting zone—a 12% reduction in migration probability. This gap persists across all education levels and throughout the twenties, suggesting it's not simply about college choices or early career constraints.</p>
                        
                        <p><strong>The price of home:</strong> Using a structural model that separates psychological attachment from economic constraints, young adults from two-parent households value staying in their hometown 35% more than those from other family structures—a 'home premium' that persists even after accounting for wage differences and moving costs.</p>
                        
                        <p><strong>Not about the money:</strong> Migration costs are nearly identical between groups, ruling out financial constraints as the driver. The difference comes entirely from stronger emotional anchors to home locations.</p>
                        <p><strong>Implications:</strong> This reveals a deeper story about informal insurance in the US. The stronger home premium for two-parent households may reflect the family support network they can access—both parents providing a safety net that makes leaving less attractive. Young adults from other family structures, with potentially weaker local safety nets, show greater willingness to migrate despite facing similar costs. This geographic stickiness of those with stronger family support ironically contributes to declining dynamism: those best equipped with family resources to take risks are least likely to pursue opportunities elsewhere. As formal social safety nets weaken, family structure increasingly determines who can afford to stay home and who must seek opportunity elsewhere, potentially exacerbating regional inequality.</p>    
                     </div>`
                    }
                },

            ]
        }
    }
});

