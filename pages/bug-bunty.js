import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Bug Bounty" pageTitle="Earn free coins">
                <div class="bug_bunty">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-9 col-lg-9">
                                <div class="program_details">
                                    <h3>Program details</h3>
                                    <p>The main CS.MONEY prerogative is to give our 3.5+ million users opportunity to sell,
                                        trade or
                                        buy any CS:GO or DOTA 2 items they want to get, thus, we have to insure that our user’s
                                        personal information is safe and secure. We decided to launch our public bug bounty
                                        program,
                                        to improve security of our site. The goal of this bounty is to find vulnerabilities
                                        which
                                        affect the confidentiality, integrity, or availability of our services and code run by
                                        us or
                                        our customers.</p>
                                </div>

                                <div class="target_overview">
                                    <h3>Target overview</h3>
                                    <div class="tag_list">
                                        <a href="#">CS MONEY</a>
                                        <a href="#">support.cs.money</a>
                                        <a href="#">3d.cs.money</a>
                                    </div>
                                </div>

                                <div class="target_reward">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Target</th>
                                                    <th>Rewards</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="border-top-1">
                                                    <th>XSS or CSRF vulnerabilities which have significant impact</th>
                                                    <td class="text-primary">$500 +</td>
                                                </tr>
                                                <tr>
                                                    <th>Clickjacking</th>
                                                    <td class="text-primary">$100 +</td>
                                                </tr>
                                                <tr>
                                                    <th>For remote executing code on server, unlegitimate access to our servers,
                                                        disclosure internal private API</th>
                                                    <td class="text-primary">$1000 +</td>
                                                </tr>
                                                <tr>
                                                    <th>For any unlegitimate access to our support system</th>
                                                    <td class="text-primary">$100 +</td>
                                                </tr>
                                                <tr>
                                                    <th>For vulnerability in other systems (e.g. pic.money, s.cs.money and etc.)
                                                        which can violate work on main site</th>
                                                    <td class="text-primary">$100 +</td>
                                                </tr>
                                                <tr>
                                                    <th>Any deanonymization of users or user’s data. Trading history, telephone
                                                        numbers, ips and etc.</th>
                                                    <td class="text-primary">$100 +</td>
                                                </tr>
                                                <tr>
                                                    <th>Incorrect saving time. For instance saving credit cards numbers in
                                                        cookies
                                                    </th>
                                                    <td class="text-primary">$100 - $5000</td>
                                                </tr>
                                                <tr>
                                                    <th>Any errors in business logic which can lead to loss of the money. For
                                                        example: bugs when balance wasn’t written off after the skin was bought
                                                        or
                                                        traded. Bounty can be easilly increased in case a greater vulnerability
                                                        is
                                                        discovered.</th>
                                                    <td class="text-primary">$100 - $5000</td>
                                                </tr>
                                                <tr>
                                                    <th>Authorization or authentication bypass</th>
                                                    <td class="text-primary">$100 +</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3">
                                <div class="vulnerabilities">
                                    <h4 class="title">12 vulnerabilities rewarded</h4>
                                    <h4>Validation within 2 days</h4>
                                    <p>75% of submissions are accepted or rejected within 2 days</p>
                                    <button class="btn btn-primary btn-block">REPORT BUG</button>
                                    <p class="condition">If you find a vulnerability or you want to clarify information about
                                        the
                                        conditions of the
                                        program, contact us:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Layout>
        </>
    )
}

export default Blank