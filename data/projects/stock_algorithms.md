
# Stock Algorithms... An Exploration

**Live Demo: https://stock-algorithms.vercel.app/**

<img width="1142" alt="image" src="https://github.com/user-attachments/assets/b02eb091-0ee0-4202-ae1d-fd3bbb43bc3d">


### Overview
This project explores the performance of two different trading algorithms—a perfect foresight algorithm and a simple greedy algorithm—on various stocks and cryptocurrencies over the course of a month.


### Introduction
In my computer systems class, I learned about cache eviction policies, which use simple heuristics to make decisions under uncertainty. This led me to wonder: can similar heuristics apply to stock trading?

I wanted to answer the following questions:

- How much money could you make if you traded Apple stock perfectly, buying every time it was about to rise and selling every time it was about to fall?
- How would a greedy algorithm, which buys on an upward trend and sells on a downward trend at every minute, perform on Apple stock?
- How would these two algorithms compare when applied to different stocks and cryptocurrencies over a month?


### Results:

<img width="1142" alt="image" src="https://github.com/user-attachments/assets/630e3f2e-19cb-4828-a832-3444a21daf0d">

### Key Observations

**Perfect Foresight Strategy:**
For assets like Apple (AAPL), a perfect trading strategy with minute-by-minute precision could yield around 10.75% average daily returns. However, when applying the same strategy to more volatile assets like Dogecoin (DOGE-USD), the returns dramatically increase to approximately 35.44%.
This difference highlights the impact of volatility on potential gains; more stable stocks such as Apple provide moderate, consistent returns, while more volatile cryptocurrencies like Dogecoin offer higher potential gains when perfect timing is assumed.
Greedy Algorithm Performance:

**Simple Greedy Algorithm:**
The greedy algorithm, which is a simplified and more realistic approach, examines trends every minute and makes decisions based on short-term momentum.
This approach averaged about 4.21% daily returns for Apple and a much higher 25.01% for Dogecoin when fees were not considered. These results still demonstrate the higher profitability potential of trading in more volatile assets, but with much more achievable returns given the algorithm's simplicity compared to a perfect foresight strategy.
Impact of Trading Fees:

**Trading Fees:**
Initially, trading fees were not considered in the analysis. However, once you accounted for a typical trading fee of 0.1% per trade, the results painted a very different picture. Given the high-frequency nature of the greedy algorithm—executing approximately 600 trades per day (once per minute)—the cumulative cost of these fees became significant.
For example, at 0.1% per trade over 600 trades, the fees amounted to a substantial portion of any profits gained. This led to scenarios where, even with high average daily returns, the costs of frequent trading eroded all potential profits, sometimes resulting in overall losses.
