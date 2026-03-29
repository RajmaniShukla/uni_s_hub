#!/bin/bash

echo "🧪 TESTING HARDCODED AUTHENTICATION"
echo "=================================="
echo ""

# Check server
if ! curl -s http://localhost:3000 > /dev/null; then
    echo "❌ Server not running on port 3000"
    exit 1
fi

echo "✅ Server is running on http://localhost:3000"
echo ""

# Test credentials
echo "📋 TESTING LOGIN CREDENTIALS:"
echo ""

test_credentials() {
    local email=$1
    local password=$2
    local expected_role=$3

    echo "Testing: $email / $password (expected: $expected_role)"

    # Get CSRF token first
    csrf_response=$(curl -s -c cookies.txt http://localhost:3000/auth/signin)
    csrf_token=$(echo "$csrf_response" | grep -o 'name="csrfToken" value="[^"]*"' | sed 's/.*value="\([^"]*\)".*/\1/')

    if [ -z "$csrf_token" ]; then
        echo "  ❌ Could not get CSRF token"
        return 1
    fi

    # Try login
    login_response=$(curl -s -b cookies.txt -c cookies.txt \
        -d "email=$email&password=$password&csrfToken=$csrf_token" \
        http://localhost:3000/api/auth/callback/credentials)

    # Check if redirected (success) or got error
    if echo "$login_response" | grep -q "dashboard"; then
        echo "  ✅ SUCCESS - Redirected to dashboard"
        return 0
    elif echo "$login_response" | grep -q "Invalid credentials"; then
        echo "  ❌ FAILED - Invalid credentials"
        return 1
    else
        echo "  ⚠️  UNKNOWN RESPONSE"
        return 1
    fi
}

# Test all credentials
test_credentials "student@test.com" "password123" "student"
test_credentials "teacher@test.com" "password123" "teacher"
test_credentials "parent@test.com" "password123" "parent"

echo ""
echo "🧪 TESTING INVALID CREDENTIALS:"
test_credentials "wrong@email.com" "wrongpass" "none"

echo ""
echo "🎯 MANUAL TESTING:"
echo "Visit: http://localhost:3000/auth/signin"
echo "Use credentials above to test login manually"
echo ""

# Cleanup
rm -f cookies.txt