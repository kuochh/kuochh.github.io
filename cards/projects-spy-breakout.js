// Global array - don't modify this line
window.PortfolioCards = window.PortfolioCards || [];

// ==============================================
// SPY Market Breakout Prediction Project Card
// ==============================================

window.PortfolioCards.push({
    category: 'projects',
    
    data: {
        id: 'spy-breakout',
        title: 'Market Regime Classification: A Data Science Case Study in Ensemble Methods',
        
        description: 'Processed 14M+ financial records to build cross-ETF ensemble classifier. Reduced prediction variance by 47% while achieving 95.6% PR-AUC on market regime detection.',
        status: 'Project',
        date: 'September 2025',
        tags: ['ML Engineering', 'Time Series', 'Python', 'Ensemble Methods'],
        
        modal: {
            subtitle: 'Data science case study: ensemble methods on non-stationary time series',
            
            tabs: [
                // --- Page 1: Overview ---
                {
                    id: 'overview',
                    title: 'Overview',
                    content: {
                        type: 'markdown',
                        md: `### Problem Definition


**Task**: Predict if SPY (S&P 500 ETF) will experience ≥0.4% price movement from 10:00 AM to market close (4:00 PM), using only the first 30 minutes of trading data.

**Important**: This is a data science project demonstrating ensemble methods on financial time series - NOT a trading strategy. Market prediction is the "hello world" of hard ML problems. This data science exercise uses financial data to demonstrate advanced ensemble techniques, variance reduction, and temporal validation.

**Why This Makes an Interesting Data Science Challenge**: 
- Non-stationary time series (monthly breakout rates vary 5%-95%)
- Demonstrates advanced ensemble techniques for variance reduction
- Shows efficient processing of 14M+ records with Polars
- Tests rigorous temporal validation methodology

### Key Results

- **95.6% ± 6.8% PR-AUC** in 2024 out-of-sample testing
- **47% variance reduction** vs best individual model
- **2.9x better Signal/Noise ratio** than best single model
- **100+ models** managed with MLflow/Optuna

![Progressive Performance Ladder](asset/figure/projects/spy-breakout/progressive_performance_ladder.png)

*Performance progression from baseline (42%) to final ensemble (95.6% PR-AUC)*

### Technical Approach

**Cross-ETF Architecture**: Built specialized classification and regression models using different ETFs (bonds, small-caps, growth stocks) to predict the same SPY target. Tree-based meta-learners combine these diverse signals.

**Key Innovation**: Discovered regression models outperform classifiers when used for binary prediction ranking (2.79 vs 2.39 Signal/Noise ratio).`
                    }
                },
                
                // --- Page 2: Technical Implementation ---
                {
                    id: 'implementation',
                    title: 'Implementation',
                    content: {
                        type: 'markdown',
                        md: `### Data Pipeline

**Scale**: 14M+ minute-level records across 9 ETFs (2017-2024)
- SPY, VTI, VOO (market indices)
- IWM, VUG (small-cap, growth)  
- TLT, AGG, BND, HYG (bonds/credit)

**Feature Engineering**:
- Simple price/volume indicators 
- Rolling statistics with multiple windows
- DTW-based pattern clustering on 30-minute trajectories
- Leveraged Polars to handle 14M+ records with 10x speed improvement over pandas

### Model Architecture

**Base Models** (100+ configurations per ETF):
- Model types: Classification **AND** regression models for each algorithm (XGBoost, RandomForest, LogisticRegression)
- Target variations: Multiple thresholds (0.3%, 0.4%, 0.5%) and directions (up/down) for singal diversity
- Feature selection: PCA (85%, 95% variance), SelectKBest (50, 100, 120)
- Time decay: α ∈ {0.0, 0.02, 0.05} for temporal weighting
- Hyperparameter tuning: Optuna with 1000+ trials per model type
- MLflow for comprehensive experiment tracking

**Meta-Learning Stack**:
- Stage 1: Train individual models per ETF (9 ETFs × multiple configs)
- Stage 2: Collect base model predictions as meta-features
- Stage 3: Meta-learner trained on pre-2024 data, tested on 2024
- Total runtime: ~4 hours for full pipeline - impractical for real-time trading

**Computational Complexity**:
- 100+ models require sequential training and inference
- Feature engineering alone takes 30+ minutes on 14M records 
- Ensemble prediction requires all models to complete before model selection

### Validation Framework

**Temporal Separation** (preventing leakage):
- 2017-2023: Model development
- 2022-2023: Ensemble training
- 2024: Pure out-of-sample testing

**Walk-Forward Validation**:
- 24-month rolling training window
- Monthly retraining cycle
- Each prediction uses only historical data
- Zero future information leakage guaranteed
- Mimics real-world constraints despite not being viable for trading`
                    }
                },
                
                // --- Page 3: Results & Analysis ---
                {
                    id: 'results',
                    title: 'Results',
                    content: {
                        type: 'markdown',
                        md: `### Performance Analysis

![Cross-ETF Performance](asset/figure/projects/spy-breakout/cross_etf_performance_unified.png)

*Non-SPY ETFs (particularly regression models) often predict SPY better than SPY itself. Individual models exhibit typical risk-return trade-off (higher mean, higher std)*

### Ensemble vs Individual Models

**Performance Comparison**:

- **PR-AUC Mean**: Best Individual 60.8% → Ensemble 95.6% (+57% improvement)
- **Std Deviation**: Best Individual 12.8% → Ensemble 6.8% (-47% reduction)
- **Signal/Noise**: Best Individual 4.75 → Ensemble 14.06 (3x improvement)

*Note: "Best Individual" was cherry-picked from 100+ models with hindsight*

![Stability Analysis](asset/figure/projects/spy-breakout/stability_analysis.png)

*Ensemble maintains consistency despite baseline volatility ranging from 23% to 59%*



### Why Tree-Based Meta-Learners Excel

Tree methods capture non-linear interactions between ETF signals:
- Random Forest: 95.6% ± 6.8% (S/N: 14.0)
- XGBoost: 94.1% ± 6.9% (S/N: 13.6)  
- Naive Ensemble: 66.9% ± 10.8% (S/N: 6.2)
- Logistic Regression: 55% ± 15% (S/N: 3.7)

![Meta-Learner Performance](asset/figure/projects/spy-breakout/meta_learner_risk_return_analysis.png)
*Tree-based meta-learners capture complex interactions linear models miss*

![PR Curves](asset/figure/projects/spy-breakout/pr_curves_comparison.png)
*Precision-Recall curves showing ensemble dominance across all operating points*`
                    }
                },
                
                // --- Page 4: Limitations & Takeaways ---
                {
                    id: 'limitations',
                    title: 'Caveats & Takeaways',
                    content: {
                        type: 'markdown',
                        md: `

### Caveats

**This is a data science exercise, NOT a viable trading system:**

**Why Not Trading-Ready**:
- No position sizing or risk management (binary classification only)
- ~4 hour runtime makes real-time trading impossible
- Transaction costs not modeled (0.4% threshold ≈ round-trip costs)
- Assumes perfect execution without slippage or market impact

**What Makes This Valuable Data Science**:
- Successfully handles non-stationary distributions (5%-95% variation)
- Demonstrates ensemble variance reduction (47% improvement)
- Scales to 14M+ records with modern tools (Polars, MLflow, Optuna)
- Rigorous temporal validation preventing data leakage
### Key Technical Takeaways

1. **Cross-domain signals work**: Bond ETFs predicting equity movements demonstrates value of diverse data sources

2. **Regression for ranking**: Counter-intuitively, regression models excel at binary classification when used as rankers

3. **Ensemble variance reduction**: Achieved theoretical σ²/n scaling in practice

4. **Non-linear meta-learning**: Tree-based stackers captured complex interactions linear models missed

### Tools & Technologies

- **Python**: pandas, Polars, scikit-learn, XGBoost
- **ML Ops**: MLflow for experiment tracking, Optuna for hyperparameter optimization
- **Infrastructure**: 14M+ records processed efficiently with Polars
- **Validation**: Rigorous temporal separation framework
- **Visualization**: matplotlib, seaborn for all charts

*This project demonstrates advanced ML capabilities on challenging financial time series data. The techniques shown here (ensemble methods, variance reduction, temporal validation) are applicable to many real-world data science problems beyond finance.*`
                    }
                },
                
                // --- Page 5: Visualizations ---
                {
                    id: 'visualizations',
                    title: 'Visualizations',
                    content: {
                        type: 'markdown',
                        md: `### All Visualizations

#### Performance Overview
![Progressive Performance Ladder](asset/figure/projects/spy-breakout/progressive_performance_ladder.png)
*Progression from baseline (42%) to Cross-ETF ensemble (95.6% PR-AUC)*

#### Market Context
![Monthly Breakout Distribution](asset/figure/projects/spy-breakout/monthly_breakout_distribution_2017_2023.png)
*Breakout rate distribution showing volatility regimes across 84 months*

#### Cross-ETF Analysis
![Cross-ETF Performance](asset/figure/projects/spy-breakout/cross_etf_performance_unified.png)
*PR-AUC mean vs standard deviation across 9 ETFs - regression models outperform classification*

#### Temporal Stability
![Temporal Instability](asset/figure/projects/spy-breakout/cross_etf_timeline_cls.png)
*Individual model performance instability motivating ensemble approach*

![Stability Analysis](asset/figure/projects/spy-breakout/stability_analysis.png)
*Ensemble consistency despite baseline volatility (23%-59% range)*

#### Ensemble Performance
![Meta-Learner Performance](asset/figure/projects/spy-breakout/meta_learner_risk_return_analysis.png)
*Tree-based meta-learners capturing non-linear interactions*

![Variance Reduction](asset/figure/projects/spy-breakout/variance_reduction_analysis.png)
*Ensemble achieving higher mean AND lower variance vs top individual models*

![Risk-Return Frontier](asset/figure/projects/spy-breakout/risk_return_frontier.png)
*Pareto-optimal achievement: better performance with less risk*

![PR Curves](asset/figure/projects/spy-breakout/pr_curves_comparison.png)
*Precision-Recall curves showing ensemble dominance across all thresholds*`
                    }
                }
            ]
        }
    }
});