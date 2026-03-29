#!/bin/bash

echo "🚀 Universal Study Hub - Dashboard Testing Guide"
echo "================================================"
echo ""

# Check if dev server is running
if curl -s http://localhost:3002 > /dev/null; then
    echo "✅ Dev server is running on http://localhost:3002"
else
    echo "❌ Dev server not running. Start with: npm run dev"
    exit 1
fi

echo ""
echo "📋 AVAILABLE TEST ACCOUNTS:"
echo "Student: student@test.com / password123"
echo "Teacher: teacher@test.com / password123"
echo "Parent:  parent@test.com / password123"
echo ""

echo "🔗 DIRECT DASHBOARD LINKS (for UI testing):"
echo "Student: http://localhost:3002/dashboard/student"
echo "Teacher: http://localhost:3002/dashboard/teacher"
echo "Parent:  http://localhost:3002/dashboard/parent"
echo ""

echo "🎯 TESTING WORKFLOW:"
echo "1. Visit http://localhost:3002"
echo "2. Click 'Login' in header"
echo "3. Use test credentials above"
echo "4. Check dashboard features:"
echo "   - Sidebar navigation"
echo "   - Dashboard widgets"
echo "   - Dark mode toggle"
echo "   - Mobile responsiveness"
echo ""

echo "💡 TIP: If database isn't set up, visit dashboard URLs directly"
echo "   to see the UI components and layouts."
echo ""

echo "Ready to test! 🎉"