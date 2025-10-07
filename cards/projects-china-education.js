window.PortfolioCards = window.PortfolioCards || [];

window.PortfolioCards.push({
    category: 'projects',
    
    data: {
        id: 'compulsory-schooling-locus-control-china',
        title: 'Compulsory Schooling and Locus of Control: Evidence from China',
        
        description: 'Using China\'s 1986 Compulsory Schooling Laws, I find that individuals induced to complete junior high school develop 0.84 SD more internal locus of control—primarily by rejecting external explanations like luck and family connections rather than embracing internal ones.',
        date: 'February 2021',
        status: 'Working Paper',
        tags: ['Applied Microeconomics', 'Causal Inference', 'Panel Data'],
        
        modal: {
            subtitle: 'How mandatory education shapes personality: causal evidence from a natural experiment',
            
            tabs: [
                {
                    id: 'overview',
                    title: 'Overview',
                    content: {
                        type: 'html',
                        html: `
                        <div class="research-summary">
                        <h3>Background</h3>
                        <p>Schools clearly boost cognitive skills—but do they shape personality? Research shows non-cognitive skills like locus of control predict earnings and employment as powerfully as IQ, yet we know surprisingly little about whether formal schooling causally affects these traits. Locus of control measures whether people believe effort determines success (internal) versus luck and connections (external). While correlational evidence suggests more educated people are more internal, this could reflect selection: perhaps internally-oriented people simply invest more in education because they believe it pays off.</p>
                        
                        <h3>Research Questions</h3>
                        <ul>
                            <li>Does compulsory education causally increase internal locus of control?</li>
                            <li>If education matters, what's the mechanism—does schooling strengthen belief in effort, or weaken belief in luck?</li>
                        </ul>
                        
                        <h3>Motivation</h3>
                        <p>China's 1986 Compulsory Schooling Law created a natural experiment. The law mandated 9 years of education nationwide, but implementation varied dramatically: Beijing's enrollment was already 95% while Guizhou's was 39%. Combined with staggered rollout (1986-1994), this creates the variation needed to identify causal effects. If two otherwise-identical teenagers experienced different educational attainment purely because one lived in a province that aggressively enforced the law, do their personalities diverge years later?</p>
                        </div>`
                    }
                },
                {
                    id: 'methodology',
                    title: 'Methodology',
                    content: {
                        type: 'html',
                        html: `
                        <div class="research-methodology">
                        <h3>Data</h3>
                        <p>China Family Panel Studies (CFPS) 2010: ~16,500 adults born 1964-1992 across 25 provinces. Locus of control measured through 10 survey questions—five external (success depends on luck, family wealth, social status, connections) and five internal (success depends on effort, education, hard work, intellect, talent). Responses combined into a standardized index increasing in the internal direction.</p>
                        
                        <h3>Identification Strategy</h3>
                        <p>Difference-in-differences instrumental variables design exploiting two dimensions of variation:</p>
                        <ul>
                            <li><strong>Provincial intensity:</strong> Baseline proportion without junior high completion among 21-25 year-olds in 1986, ranging from 5% (Beijing) to 61% (Guizhou). High-intensity provinces saw larger enrollment increases.</li>
                            
                            <li><strong>Cohort exposure:</strong> Individuals aged 6-15 when their province implemented the law received varying exposure years. Those age ≤6 were fully treated; those age ≥15 were untreated; ages 7-14 received partial treatment proportional to remaining compulsory years.</li>
                        </ul>
                        
                        <h3>The Innovation</h3>
                        <p>The interaction Treatment × Intensity instruments for educational attainment, isolating compliers—individuals who completed junior high specifically because of the law. This addresses both selection bias and measurement error. Region-specific birth-year fixed effects control for differential economic growth and school quality improvements across China's six regions, addressing the main identification threat.</p>
                        </div>`
                    }
                },
                {
                    id: 'results',
                    title: 'Results',
                    content: {
                        type: 'html',
                        html: `
                        <div class="research-results">
                        <h3>First Stage</h3>
                        <p>The law worked. Fully-treated individuals in high-intensity provinces (45% baseline non-completion) were 21% more likely to complete junior high and obtained 0.85 additional years of schooling versus low-intensity provinces (5% baseline). Effects concentrated among females and rural residents—groups initially least likely to attend school.</p>
                        
                        <h3>Main Finding</h3>
                        <p><strong>Completing junior high school increases locus of control by 0.84 standard deviations.</strong> One additional year increases it by 0.26 SD. For scale: this rivals the effect on math scores (0.93 SD) and exceeds half the word test effect (1.98 SD). OLS estimates are six times smaller (0.13 SD), suggesting either substantial selection bias or heterogeneous treatment effects where compliers benefit more than always-takers.</p>
                        
                        <p><strong>The mechanism is rejection, not affirmation:</strong> Decomposing the index reveals education operates through weakened external beliefs, not strengthened internal ones. Completing junior high reduces agreement that success depends on luck, family wealth, or social status by 40-50 percentage points. But it doesn't increase agreement that success depends on effort, education, or hard work—those coefficients are statistically zero. Schooling doesn't make people embrace meritocracy; it makes them reject fatalism.</p>
                        
                        <h3>Implications</h3>
                        <p>This reveals how education shapes worldviews beyond skills. The finding that effects concentrate among compliers (females, rural residents) suggests the experience of completing junior high—particularly for those who wouldn't have otherwise—fundamentally shifts beliefs about social mobility. Those induced to stay in school learned that outcomes aren't predetermined by birth circumstances. Whether this optimism proves justified in China's actual labor market is a separate question, but the psychological transformation is real and substantial.</p>
                        </div>`
                    }
                }
            ]
        }
    }
});