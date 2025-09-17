import React from 'react';

function ExpenseDetails({ incomeAmt, expenseAmt, stats }) {
    const balance = incomeAmt - expenseAmt;
    
    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="text-center mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Your Farm Balance</h2>
                <div className={`text-4xl font-bold ${
                    balance >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                    ₹{balance.toLocaleString('en-IN')}
                </div>
                {stats && (
                    <p className="text-sm text-gray-500 mt-2">
                        Based on {stats.totalTransactions} transactions
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Income Card */}
                <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-xl p-4 text-white transform hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-green-100 text-sm font-medium">Total Income</p>
                            <p className="text-2xl font-bold">₹{incomeAmt.toLocaleString('en-IN')}</p>
                            {stats && (
                                <p className="text-green-100 text-xs mt-1">
                                    {stats.totalIncome ? `₹${stats.totalIncome.toLocaleString('en-IN')}` : 'No data'}
                                </p>
                            )}
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-full p-3">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Expense Card */}
                <div className="bg-gradient-to-r from-red-400 to-red-600 rounded-xl p-4 text-white transform hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-red-100 text-sm font-medium">Total Expense</p>
                            <p className="text-2xl font-bold">₹{expenseAmt.toLocaleString('en-IN')}</p>
                            {stats && (
                                <p className="text-red-100 text-xs mt-1">
                                    {stats.totalExpense ? `₹${stats.totalExpense.toLocaleString('en-IN')}` : 'No data'}
                                </p>
                            )}
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-full p-3">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Financial Health Indicator */}
            {balance !== 0 && incomeAmt > 0 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                            {balance > 0 ? 'Profit Margin' : 'Loss Percentage'}
                        </span>
                        <span className={`text-lg font-bold ${
                            balance > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                            {Math.abs((balance / incomeAmt) * 100).toFixed(1)}%
                        </span>
                    </div>
                    <p className="text-xs text-gray-600">
                        {balance > 0 
                            ? `You're making a profit of ${Math.abs((balance / incomeAmt) * 100).toFixed(1)}% on your farm operations`
                            : `You're operating at a loss of ${Math.abs((balance / incomeAmt) * 100).toFixed(1)}% - consider optimizing costs`
                        }
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        This is for informational purposes only - no amounts are deducted from your transactions.
                    </p>
                </div>
            )}

            {/* Agricultural Insights */}
            {stats && stats.categoryBreakdown && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <h4 className="text-sm font-medium text-green-800 mb-2">🌾 Agricultural Insights</h4>
                    <div className="space-y-2">
                        {stats.topCategories && stats.topCategories.length > 0 && (
                            <div>
                                <p className="text-xs text-green-700 font-medium">Top Expense Categories:</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {stats.topCategories.slice(0, 3).map((cat, index) => (
                                        <span key={index} className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
                                            {cat.category} ({cat.percentage.toFixed(1)}%)
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {stats.seasonalBreakdown && Object.keys(stats.seasonalBreakdown).length > 0 && (
                            <div>
                                <p className="text-xs text-green-700 font-medium">Seasonal Activity:</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {Object.entries(stats.seasonalBreakdown)
                                        .filter(([season, data]) => data.income > 0 || data.expense > 0)
                                        .slice(0, 2)
                                        .map(([season, data]) => (
                                            <span key={season} className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
                                                {season} (₹{(data.income + data.expense).toLocaleString()})
                                            </span>
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExpenseDetails;