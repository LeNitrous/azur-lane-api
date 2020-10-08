/*
 * Copyright 2019 - 2020 Nathan Alo, Ayane Satomi, et al.
 * Licensed under the GNU General Public License v3
 * See LICENSE for details.
 */
import CommissionList from "lib/models/commission/model.commission.list";
import methods from "lib/methods";

export default methods({
    get: async (_, res) =>
        res.status(200).json(await new CommissionList().run()
});